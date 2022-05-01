import { render, screen } from '@testing-library/react';

import { Wrapper } from '.';

describe('<Wrapper />', () => {
  it('should render correctly', () => {
    const children = <div data-testid="children">Hello World</div>;
    render(<Wrapper>{children}</Wrapper>);

    expect(screen.getByTestId('children')).toBeInTheDocument();
  });
});
