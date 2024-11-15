import { CSSProperties } from 'react';

export const getBreakWithDotsStyles = (lines: number = 1): CSSProperties => {
  return lines > 1
    ? {
        overflow: 'hidden',
        display: '-webkit-box',
        WebkitLineClamp: lines,
        WebkitBoxOrient: 'vertical',
      }
    : {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
      };
};
