import ChevronUpIcon from '@heroicons/react/solid/ChevronUpIcon';
import clsx from 'clsx';
import { useMemo } from 'react';

type Props = {
  value: number;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

export default function Upvote({ value, active = false, disabled = false, onClick }: Props) {
  const colors = useMemo(
    () => (active ? 'bg-blue text-white' : 'text-blue bg-gray-light hover:bg-blue/50'),
    [active],
  );

  return (
    <button
      aria-label="Upvote button"
      type="button"
      disabled={disabled}
      className={clsx(
        'inline-block rounded-lg px-2 py-1.5 text-body3 font-bold transition-colors',
        colors,
      )}
      onClick={onClick}
    >
      <ChevronUpIcon className={clsx('w-4')} />
      <span className={clsx(!active && 'text-navy-light')}>{value}</span>
    </button>
  );
}
