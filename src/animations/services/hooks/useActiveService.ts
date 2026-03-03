import { useEffect, useRef, useState } from 'react';
import { hoverExpandTicker } from '../config/hoverExpandConfig';

type UseActiveServiceOptions = {
  itemsCount: number;
  interactive: boolean;
};

export const useActiveService = ({
  itemsCount,
  interactive,
}: UseActiveServiceOptions): {
  activeIndex: number | null;
  layoutIndex: number | null;
  activate: (index: number) => void;
  activateImmediately: (index: number) => void;
  deactivate: () => void;
} => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [layoutIndex, setLayoutIndex] = useState<number | null>(null);
  const expandTimerRef = useRef<number | null>(null);
  const collapseTimerRef = useRef<number | null>(null);
  const collapseAnimationTimerRef = useRef<number | null>(null);
  const hoveredIndexRef = useRef<number | null>(null);

  const clearExpandTimer = (): void => {
    if (expandTimerRef.current === null) {
      return;
    }

    window.clearTimeout(expandTimerRef.current);
    expandTimerRef.current = null;
  };

  const clearCollapseTimer = (): void => {
    if (collapseTimerRef.current === null) {
      return;
    }

    window.clearTimeout(collapseTimerRef.current);
    collapseTimerRef.current = null;
  };

  const clearCollapseAnimationTimer = (): void => {
    if (collapseAnimationTimerRef.current === null) {
      return;
    }

    window.clearTimeout(collapseAnimationTimerRef.current);
    collapseAnimationTimerRef.current = null;
  };

  const scheduleLayoutRelease = (collapsingIndex: number, callback?: () => void): void => {
    clearCollapseAnimationTimer();
    collapseAnimationTimerRef.current = window.setTimeout(() => {
      setLayoutIndex((currentLayoutIndex) =>
        currentLayoutIndex === collapsingIndex ? null : currentLayoutIndex,
      );
      collapseAnimationTimerRef.current = null;
      callback?.();
    }, hoverExpandTicker.panelCollapseDurationMs);
  };

  const startCollapse = (callback?: () => void): void => {
    if (safeActiveIndex === null) {
      callback?.();
      return;
    }

    const collapsingIndex = safeActiveIndex;
    setActiveIndex(null);
    setLayoutIndex(collapsingIndex);
    scheduleLayoutRelease(collapsingIndex, callback);
  };

  const scheduleExpand = (index: number, delay: number): void => {
    clearExpandTimer();
    expandTimerRef.current = window.setTimeout(() => {
      if (hoveredIndexRef.current !== index) {
        return;
      }

      clearCollapseAnimationTimer();
      setActiveIndex(index);
      setLayoutIndex(index);
      expandTimerRef.current = null;
    }, delay);
  };

  useEffect(() => {
    return () => {
      clearExpandTimer();
      clearCollapseTimer();
      clearCollapseAnimationTimer();
    };
  }, []);

  const safeActiveIndex =
    activeIndex === null || itemsCount === 0 ? null : Math.max(0, Math.min(activeIndex, itemsCount - 1));

  return {
    activeIndex: safeActiveIndex,
    layoutIndex,
    activate: (index: number) => {
      if (!interactive || itemsCount === 0) {
        return;
      }

      const boundedIndex = Math.max(0, Math.min(index, itemsCount - 1));
      hoveredIndexRef.current = boundedIndex;

      if (safeActiveIndex === null) {
        clearCollapseTimer();

        if (layoutIndex !== null) {
          scheduleExpand(
            boundedIndex,
            hoverExpandTicker.panelCollapseDurationMs + hoverExpandTicker.switchExpandDelayMs,
          );
          return;
        }

        scheduleExpand(boundedIndex, hoverExpandTicker.initialExpandDelayMs);
        return;
      }

      if (safeActiveIndex === boundedIndex) {
        clearExpandTimer();
        clearCollapseTimer();
        return;
      }

      clearExpandTimer();
      clearCollapseTimer();
      collapseTimerRef.current = window.setTimeout(() => {
        startCollapse(() => {
          scheduleExpand(boundedIndex, hoverExpandTicker.switchExpandDelayMs);
        });
        collapseTimerRef.current = null;
      }, hoverExpandTicker.collapseDelayMs);
    },
    activateImmediately: (index: number) => {
      if (!interactive || itemsCount === 0) {
        return;
      }

      const boundedIndex = Math.max(0, Math.min(index, itemsCount - 1));
      hoveredIndexRef.current = boundedIndex;
      clearExpandTimer();
      clearCollapseTimer();
      clearCollapseAnimationTimer();
      setActiveIndex(boundedIndex);
      setLayoutIndex(boundedIndex);
    },
    deactivate: () => {
      if (!interactive) {
        return;
      }

      hoveredIndexRef.current = null;
      clearExpandTimer();

      if (safeActiveIndex === null) {
        clearCollapseTimer();
        return;
      }

      clearCollapseTimer();
      collapseTimerRef.current = window.setTimeout(() => {
        if (hoveredIndexRef.current !== null) {
          return;
        }

        startCollapse();
        collapseTimerRef.current = null;
      }, hoverExpandTicker.collapseDelayMs);
    },
  };
};
