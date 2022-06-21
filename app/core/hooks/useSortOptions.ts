import { useCallback, useMemo, useState } from 'react';

export type SortOption = 'upvotes-desc' | 'upvotes-asc' | 'comments-desc' | 'comments-asc';

const options: Array<{ label: string; value: SortOption }> = [
  { label: 'Most Upvotes', value: 'upvotes-desc' },
  { label: 'Least Upvotes', value: 'upvotes-asc' },
  { label: 'Most Comments', value: 'comments-desc' },
  { label: 'Least Comments', value: 'comments-asc' },
];

const isSortOption = (option: string): option is SortOption => {
  return options.some(({ value }) => value === option);
};

export function useSortOptions(initialState = 'upvotes-desc') {
  const [currentOption, setValue] = useState(initialState);

  const currentLabel = useMemo(
    () => options.find((o) => o.value === currentOption)?.label ?? 'Invalid option',
    [currentOption],
  );

  const setSortOption = useCallback((option: string) => {
    if (!isSortOption(option)) {
      return;
    }

    setValue(option);
  }, []);

  return { options, currentOption, currentLabel, setSortOption };
}
