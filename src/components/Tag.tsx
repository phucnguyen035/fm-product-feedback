import clsx from 'clsx';
import { ReactNode, useMemo } from 'react';

type Props = {
  active?: boolean;
  onClick?: () => void;
  children: ReactNode;
};

export default function Tag({ active = false, children, onClick }: Props) {
  const colors = useMemo(
    () => (active ? 'bg-blue text-white' : 'text-blue bg-gray-light hover:bg-blue/50'),
    [active],
  );

  return (
    <button
      aria-label="Tag button"
      type="button"
      className={clsx(
        'inline-block rounded-xl px-3 py-1 text-body3 font-semibold transition-colors',
        colors,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
