import { fireEvent, render, screen } from '@testing-library/react';

import { Upvote } from '.';

describe('<Upvote />', () => {
  let upvote = 1;

  beforeEach(() => {
    upvote = 1;
  });

  it('should render with correct upvote value', () => {
    render(<Upvote value={upvote} />);

    expect(screen.getByText(upvote.toString())).toBeInTheDocument();
  });

  it('should have correct class for active state', () => {
    const { container } = render(<Upvote value={upvote} active={false} />);

    expect(container).toMatchSnapshot();
  });

  it('should have correct class for inactive state', () => {
    const { container } = render(<Upvote value={upvote} active />);

    expect(container).toMatchSnapshot();
  });

  it('should be disabled', () => {
    render(<Upvote value={upvote} disabled />);

    expect(screen.getByLabelText('upvote')).toBeDisabled();
  });

  it('should update upvote value on click', () => {
    render(
      <Upvote
        value={upvote}
        onClick={() => {
          upvote += 1;
        }}
      />,
    );

    fireEvent.click(screen.getByLabelText('upvote'));

    expect(upvote).toBe(2);
  });
});
