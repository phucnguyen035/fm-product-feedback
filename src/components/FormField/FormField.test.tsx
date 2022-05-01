import { render, screen } from '@testing-library/react';

import { FormField } from '.';

describe('<FormField />', () => {
  it('should render with label and description', () => {
    const label = 'Label';
    const description = 'Description';
    render(<FormField label={label} description={description} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should have red border and error message if errored', () => {
    const msg = 'error message';
    render(<FormField error aria-errormessage="input" errorMsg={msg} />);

    const input = screen.getByRole('textbox');

    expect(input).toHaveClass('border-red');
    expect(input).toHaveErrorMessage(msg);
  });
});
