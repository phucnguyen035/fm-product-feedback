import { useSession } from 'next-auth/react';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default function ProtectedPage({ children }: Props) {
  const session = useSession({ required: true });

  if (session.status === 'loading') {
    return null;
  }

  return <>{children}</>;
}
