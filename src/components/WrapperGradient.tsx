import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
};

export default function WrapperGradient({ children, as: Tag = 'div', className }: Props) {
  return (
    <Tag
      className={clsx(
        'h-full w-full bg-gradient-to-r from-blue/80 via-pink/80 to-orange/100',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
