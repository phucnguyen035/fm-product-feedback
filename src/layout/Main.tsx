import { ReactNode } from 'react';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

export default function Main({ meta, children }: Props) {
  return (
    <div className="w-full antialiased">
      {meta}

      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
