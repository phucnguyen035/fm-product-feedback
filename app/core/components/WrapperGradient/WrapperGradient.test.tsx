import { render, screen } from '@testing-library/react';

import { WrapperGradient } from '.';

describe('<WrapperGradient />', () => {
  it('should render correctly', () => {
    const children = <div data-testid="children">Hello World</div>;
    const { container } = render(<WrapperGradient>{children}</WrapperGradient>);

    expect(screen.getByTestId('children')).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
