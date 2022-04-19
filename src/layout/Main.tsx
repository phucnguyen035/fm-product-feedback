import { PropsWithChildren, ReactNode } from 'react';

type Props = {
  meta: ReactNode;
};

export default function Main({ meta, children }: PropsWithChildren<Props>) {
  return (
    <div className="w-full px-1 antialiased">
      {meta}

      <header></header>
      <main>{children}</main>
      <footer></footer>
    </div>
  );
}
