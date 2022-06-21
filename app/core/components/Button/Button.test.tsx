import { render } from 'test/utils';

import { Button } from '.';

const TEXT = "I'm a button";

describe('Button', () => {
  test('should render correctly', () => {
    const { queryByText } = render(<Button>{TEXT}</Button>);

    expect(queryByText(TEXT)).toBeInTheDocument();
  });

  test('should render with prepend icon correctly', () => {
    const { getByText } = render(<Button prependIcon={<span>Prepend icon</span>}>{TEXT}</Button>);

    expect(getByText('Prepend icon')).toBeInTheDocument();
  });

  describe('Button variant', () => {
    test('should have default classes if no variant', () => {
      const { getByRole } = render(<Button>{TEXT}</Button>);

      expect(getByRole('button')).toHaveClass('hover:bg-gray focus:outline-gray-dark');
    });

    test('should have gray dark text by default', () => {
      const { getByRole } = render(<Button>{TEXT}</Button>);

      expect(getByRole('button')).toHaveClass('text-gray-dark');
    });

    const variants = ['pink', 'blue', 'navy', 'red'] as const;

    test('should have light dark text if has variant', () => {
      const { getByRole } = render(<Button variant={variants[0]}>{TEXT}</Button>);

      expect(getByRole('button')).toHaveClass('text-gray-light');
    });

    variants.forEach((v) => {
      test(`should be ${v}`, () => {
        const { getByRole } = render(<Button variant={v}>{TEXT}</Button>);

        expect(getByRole('button')).toHaveClass(`bg-${v} hover:bg-${v}/80 focus:outline-${v}/80`);
      });
    });
  });
});
