import type { SyntheticEvent } from 'react';

/**
 * Stop an event from propagating and prevents default behavior.
 */
export function cancelEvent<
  T extends Event | SyntheticEvent<unknown, Event>,
>(e: T) {
  if (e) {
    if (typeof e.preventDefault === 'function') e.preventDefault();
    if (typeof e.stopPropagation === 'function') e.stopPropagation();
  }
  return e;
}
