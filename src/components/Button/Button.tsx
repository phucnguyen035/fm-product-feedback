import clsx from 'clsx';
import { ButtonHTMLAttributes, ReactNode, useMemo } from 'react';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'pink' | 'blue' | 'navy' | 'red';
  prependIcon?: ReactNode;
  children: ReactNode;
};

export default function Button({ variant, prependIcon, children, className, ...rest }: Props) {
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
        'w-36 rounded-lg py-2.5 px-4 text-body3 font-bold outline-none transition-colors md:w-40 md:text-sm',
        background,
        textColor,
        className,
      )}
      {...rest}
    >
      <div className="flex items-center justify-center">
        {prependIcon && (
          <span aria-label="icon left" className="mr-1 h-4 w-4 md:mr-3.5 md:h-5 md:w-5">
            {prependIcon}
          </span>
        )}
        {children}
      </div>
    </button>
  );
}
