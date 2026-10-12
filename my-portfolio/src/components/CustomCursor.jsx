import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef   = useRef(null);
  const ringRef  = useRef(null);
  const pos      = useRef({ x: -100, y: -100 });
  const ring     = useRef({ x: -100, y: -100 });
  const rafRef   = useRef(null);
  const [hovered, setHovered]   = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hidden, setHidden]     = useState(false);

  useEffect(() => {
    // Hide on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setHidden(true);
      return;
    }

    const onMove = e => {
      pos.current = { x: e.clientX, y: e.clientY };
    };

    const onEnter = e => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      if (el) setHovered(true);
    };
    const onLeave = e => {
      const el = e.target.closest('a, button, [role="button"], input, textarea, select, label');
      if (el) setHovered(false);
    };

    const onMouseDown = () => setClicking(true);
    const onMouseUp   = () => setClicking(false);
    const onMouseOut  = () => setHidden(true);
    const onMouseIn   = () => setHidden(false);

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onEnter);
    document.addEventListener('mouseout',  onLeave);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup',   onMouseUp);
    document.documentElement.addEventListener('mouseleave', onMouseOut);
    document.documentElement.addEventListener('mouseenter', onMouseIn);

    // Animation loop — dot snaps instantly, ring lags behind
    const LERP = 0.1;
    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * LERP;
      ring.current.y += (pos.current.y - ring.current.y) * LERP;

      if (dotRef.current) {
        dotRef.current.style.transform =
          `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout',  onLeave);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup',   onMouseUp);
      document.documentElement.removeEventListener('mouseleave', onMouseOut);
      document.documentElement.removeEventListener('mouseenter', onMouseIn);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  if (hidden && typeof window !== 'undefined' &&
      window.matchMedia('(pointer: coarse)').matches) return null;

  return (
    <>
      {/* Inner dot — snaps instantly */}
      <div
        ref={dotRef}
        className={`cursor-dot${hovered ? ' cursor-dot--hover' : ''}${clicking ? ' cursor-dot--click' : ''}${hidden ? ' cursor--hidden' : ''}`}
        aria-hidden="true"
      />
      {/* Outer ring — lags behind */}
      <div
        ref={ringRef}
        className={`cursor-ring${hovered ? ' cursor-ring--hover' : ''}${clicking ? ' cursor-ring--click' : ''}${hidden ? ' cursor--hidden' : ''}`}
        aria-hidden="true"
      />
    </>
  );
}
