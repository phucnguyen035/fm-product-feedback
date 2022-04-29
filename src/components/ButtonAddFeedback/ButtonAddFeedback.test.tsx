import { render } from '@testing-library/react';

import ButtonAddFeedback from './ButtonAddFeedback';

describe('Button Add Feedback', () => {
  it('should render correctly', () => {
    const { container } = render(<ButtonAddFeedback />);

    expect(container).toMatchSnapshot();
  });
});
