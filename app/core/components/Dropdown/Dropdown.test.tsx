import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Dropdown } from '.';

const options = [
  { label: 'Option 1', value: 'option-1' },
  { label: 'Option 2', value: 'option-2' },
];

const label = 'Dropdown label';

const onSelected = jest.fn();

describe('<Dropdown />', () => {
  beforeEach(() => {
    render(
      <Dropdown label={label} options={options} selected={'option-1'} onSelected={onSelected} />,
    );
  });

  it('should render with the correct label', () => {
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it('should have primary text when hover over option', () => {
    fireEvent.click(screen.getByText(label));
    const selectedOption = screen.getByText(options[1]!.label);

    userEvent.hover(selectedOption);
    expect(selectedOption).toHaveClass('text-pink');
  });

  it('should have check icon on selected option', () => {
    fireEvent.click(screen.getByText(label));
    const selectedOption = screen.getByText(options[0]!.label);

    const option = within(selectedOption);
    expect(option.getByTestId('check icon')).toBeInTheDocument();
  });

  it('should display the correct options', () => {
    fireEvent.click(screen.getByText(label));

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it('should trigger selected with correct value', () => {
    const labelTwo = options[1]!;

    fireEvent.click(screen.getByText(label));
    fireEvent.click(screen.getByText(labelTwo.label));

    expect(onSelected).toHaveBeenCalledWith(labelTwo.value);
  });
});
