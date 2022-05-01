import { fireEvent, render, screen, within } from '@testing-library/react';

import { FormSelect } from '.';

const onSelect = jest.fn();

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
];

const label = 'Label';
const description = 'Description';

describe('<FormSelect />', () => {
  it('should render with label and description', () => {
    render(
      <FormSelect
        value={options[0]!.label}
        options={options}
        label={label}
        description={description}
        onSelect={onSelect}
      />,
    );

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should render invalid message if value is not found', () => {
    render(<FormSelect value="invalid" options={options} label={label} onSelect={onSelect} />);

    expect(screen.getByText('Invalid option')).toBeInTheDocument();
  });

  it('should highlight selected option', () => {
    const option = options[0]!;

    render(<FormSelect value={option.value} options={options} onSelect={onSelect} />);

    fireEvent.click(screen.getByRole('button', { name: options[0]!.label }));

    const selected = screen.getByRole('option', { name: option.label });

    expect(selected).toHaveClass('text-pink');
    expect(within(selected).getByTestId('check icon')).toBeInTheDocument();
  });

  it('should call on select when changing option', () => {
    const option = options[0]!;
    const optionTwo = options[1]!;

    render(<FormSelect value={option.value} options={options} onSelect={onSelect} />);

    fireEvent.click(screen.getByRole('button', { name: option.label }));
    fireEvent.click(screen.getByRole('option', { name: optionTwo.label }));

    expect(onSelect).toHaveBeenCalledWith(optionTwo.value);
  });
});
