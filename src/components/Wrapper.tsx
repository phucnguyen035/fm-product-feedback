import { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
};

export default function Wrapper({ children, as: Tag = 'div' }: Props) {
  return <Tag className="rounded-xl bg-white p-6">{children}</Tag>;
}
