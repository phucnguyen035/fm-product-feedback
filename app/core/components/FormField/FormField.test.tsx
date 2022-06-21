import { render } from 'test/utils';

import { FormField } from '.';

describe('<FormField />', () => {
  it('should render with label and description', () => {
    const label = 'Label';
    const description = 'Description';
    const { getByText } = render(<FormField label={label} description={description} />);

    expect(getByText(label)).toBeInTheDocument();
    expect(getByText(description)).toBeInTheDocument();
  });

  it('should have red border and error message if errored', () => {
    const msg = 'error message';
    const { getByRole } = render(<FormField error aria-errormessage="input" errorMsg={msg} />);

    const input = getByRole('textbox');

    expect(input).toHaveClass('border-red');
    expect(input).toHaveErrorMessage(msg);
  });
});
