import clsx from 'clsx';
import { ButtonHTMLAttributes, PropsWithChildren, ReactNode, useMemo } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'pink' | 'blue' | 'navy' | 'red';
  prependIcon?: ReactNode;
};

export default function Button({
  variant,
  prependIcon,
  children,
  className,
  ...rest
}: PropsWithChildren<Props>) {
  const background = useMemo(() => {
    switch (variant) {
      case 'pink':
        return 'bg-pink hover:bg-pink/80 focus:outline-pink/80';
      case 'red':
        return 'bg-red hover:bg-red/80 focus:outline-red/80';
      case 'blue':
        return 'bg-blue hover:bg-blue/80 focus:outline-blue/80';
      case 'navy':
        return 'bg-navy hover:bg-navy/80 focus:outline-navy/80';

      default:
        return 'hover:bg-gray focus:outline-gray-dark';
    }
  }, [variant]);

  const textColor = useMemo(() => (variant ? 'text-gray-light' : 'text-gray-dark'), [variant]);

  return (
    <button
      className={clsx(
        'w-40 rounded-lg py-2 text-sm font-bold outline-none transition-colors',
        background,
        textColor,
        className,
      )}
      {...rest}
    >
      <div className="flex justify-center">
        {prependIcon && <span className="mr-3.5 h-5 w-5">{prependIcon}</span>}
        {children}
      </div>
    </button>
  );
}
