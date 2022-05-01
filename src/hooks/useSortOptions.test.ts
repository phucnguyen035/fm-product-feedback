import { act, renderHook } from '@testing-library/react';

import { useSortOptions } from './useSortOptions';

describe('useSortOptions', () => {
  it('should return an array of sort options and sort by most upvotes by default', () => {
    const { result } = renderHook(() => useSortOptions());

    expect(result.current.options).toHaveLength(4);
    expect(result.current.currentOption).toBe('upvotes-desc');
  });

  it('should return string invalid option if not in the list of options', () => {
    const { result } = renderHook(() => useSortOptions('invalid'));

    expect(result.current.currentLabel).toBe('Invalid option');
  });

  it('should not change current option if not in the list of options', () => {
    const { result } = renderHook(() => useSortOptions());
    const invalid = 'invalid';

    act(() => result.current.setSortOption(invalid));

    expect(result.current.currentOption).not.toBe(invalid);
  });

  it('should change current option and label', () => {
    const { result } = renderHook(() => useSortOptions());
    const option = 'upvotes-desc';

    act(() => result.current.setSortOption(option));

    expect(result.current.currentOption).toBe(option);
    expect(result.current.currentLabel).toBe('Most Upvotes');
  });
});
