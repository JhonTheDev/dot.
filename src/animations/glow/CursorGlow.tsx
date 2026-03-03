import { useEffect, useRef, useState } from 'react';
import './cursorGlow.css';

const CURSOR_MEDIA_QUERY = '(hover: hover) and (pointer: fine)';
const IDLE_DELAY_MS = 1200;
const FOLLOW_EASE = 0.16;

type CursorGlowProps = {
  hiddenSelectors?: string[];
};

export default function CursorGlow({ hiddenSelectors = [] }: CursorGlowProps) {
  const glowRef = useRef<HTMLDivElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const idleTimerRef = useRef<number | null>(null);
  const targetPositionRef = useRef({ x: 0, y: 0 });
  const currentPositionRef = useRef({ x: 0, y: 0 });
  const isVisibleRef = useRef(false);
  const isIdleRef = useRef(false);

  const [isEnabled, setIsEnabled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(CURSOR_MEDIA_QUERY);
    const handleMediaChange = (event: MediaQueryListEvent): void => {
      setIsEnabled(event.matches);
    };

    setIsEnabled(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleMediaChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  useEffect(() => {
    if (!isEnabled) {
      setIsVisible(false);
      setIsIdle(false);
      isVisibleRef.current = false;
      isIdleRef.current = false;
      return;
    }

    const resetIdleTimer = (): void => {
      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
      }

      idleTimerRef.current = window.setTimeout(() => {
        isIdleRef.current = true;
        setIsIdle(true);
      }, IDLE_DELAY_MS);
    };

    const handleMouseMove = (event: MouseEvent): void => {
      const targetElement = event.target instanceof Element ? event.target : null;
      const isInsideHiddenZone =
        targetElement !== null &&
        hiddenSelectors.some((selector) => targetElement.closest(selector) !== null);

      if (isInsideHiddenZone) {
        if (isVisibleRef.current) {
          isVisibleRef.current = false;
          setIsVisible(false);
        }

        if (isIdleRef.current) {
          isIdleRef.current = false;
          setIsIdle(false);
        }

        if (idleTimerRef.current !== null) {
          window.clearTimeout(idleTimerRef.current);
          idleTimerRef.current = null;
        }

        return;
      }

      targetPositionRef.current = {
        x: event.clientX,
        y: event.clientY,
      };

      if (!isVisibleRef.current) {
        currentPositionRef.current = {
          x: event.clientX,
          y: event.clientY,
        };
        isVisibleRef.current = true;
        setIsVisible(true);
      }

      if (isIdleRef.current) {
        isIdleRef.current = false;
        setIsIdle(false);
      }

      resetIdleTimer();
    };

    const handleMouseLeaveViewport = (): void => {
      isVisibleRef.current = false;
      isIdleRef.current = false;
      setIsVisible(false);
      setIsIdle(false);

      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
        idleTimerRef.current = null;
      }
    };

    const animate = (): void => {
      const glowNode = glowRef.current;

      if (glowNode && isVisibleRef.current) {
        const nextX =
          currentPositionRef.current.x +
          (targetPositionRef.current.x - currentPositionRef.current.x) * FOLLOW_EASE;
        const nextY =
          currentPositionRef.current.y +
          (targetPositionRef.current.y - currentPositionRef.current.y) * FOLLOW_EASE;

        currentPositionRef.current = { x: nextX, y: nextY };
        glowNode.style.transform = `translate3d(${nextX}px, ${nextY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameRef.current = window.requestAnimationFrame(animate);
    };

    const handleMouseOut = (event: MouseEvent): void => {
      const relatedTarget = event.relatedTarget as Node | null;
      if (!relatedTarget) {
        handleMouseLeaveViewport();
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseout', handleMouseOut);

    animationFrameRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);

      if (animationFrameRef.current !== null) {
        window.cancelAnimationFrame(animationFrameRef.current);
      }

      if (idleTimerRef.current !== null) {
        window.clearTimeout(idleTimerRef.current);
      }
    };
  }, [hiddenSelectors, isEnabled]);

  return (
    <div
      ref={glowRef}
      className={`cursor-glow${isEnabled ? ' cursor-glow--enabled' : ''}${isVisible ? ' cursor-glow--visible' : ''}${isIdle ? ' cursor-glow--idle' : ''}`}
      aria-hidden="true"
    />
  );
}
