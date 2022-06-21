import { fireEvent, render, screen } from '@testing-library/react';

import Tag from './Tag';

describe('<Tag />', () => {
  it('should render correctly with inactive state', () => {
    const children = 'Test';
    render(<Tag>{children}</Tag>);

    const tag = screen.getByText(children);

    expect(tag).toBeInTheDocument();
    expect(tag).toHaveClass('text-blue bg-gray-light hover:bg-blue/50');
  });

  it('should render correctly with active state', () => {
    const children = 'Test';
    render(<Tag active>{children}</Tag>);

    expect(screen.getByText(children)).toHaveClass('bg-blue text-white');
  });

  it('should call onClick when clicking on element', () => {
    const onClick = jest.fn();

    render(<Tag onClick={onClick}>Hello</Tag>);

    fireEvent.click(screen.getByLabelText('tag'));

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
