import clsx from 'clsx';
import { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
};

export default function Wrapper({ children, className, as: Tag = 'div' }: Props) {
  return <Tag className={clsx('rounded-xl bg-white p-6', className)}>{children}</Tag>;
}
