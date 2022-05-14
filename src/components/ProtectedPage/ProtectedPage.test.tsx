import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

import { ProtectedPage } from '.';

jest.mock('next-auth/react');

describe('<ProtectedPage />', () => {
  it('should not show content when loading session', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: {},
      status: 'loading',
    });

    render(<ProtectedPage>Hello</ProtectedPage>);

    expect(screen.queryByText('Hello')).not.toBeInTheDocument();
  });

  it('should show content after loading session', () => {
    (useSession as jest.Mock).mockReturnValueOnce({
      data: {},
      status: 'authenticated',
    });

    render(<ProtectedPage>Hello</ProtectedPage>);

    expect(screen.queryByText('Hello')).toBeInTheDocument();
  });
});
