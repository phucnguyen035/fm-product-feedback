import { render, screen } from '@testing-library/react';

import Button from './Button';

const TEXT = "I'm a button";

describe('Button', () => {
  test('should render correctly', () => {
    render(<Button>{TEXT}</Button>);

    expect(screen.queryByText(TEXT)).toBeInTheDocument();
  });

  test('should render with prepend icon correctly', () => {
    render(<Button prependIcon={<span>Prepend icon</span>}>{TEXT}</Button>);

    expect(screen.getByLabelText('icon left')).toBeInTheDocument();
  });

  describe('Button variant', () => {
    test('should have default classes if no variant', () => {
      render(<Button>{TEXT}</Button>);

      expect(screen.getByRole('button')).toHaveClass('hover:bg-gray focus:outline-gray-dark');
    });

    test('should have gray dark text by default', () => {
      render(<Button>{TEXT}</Button>);

      expect(screen.getByRole('button')).toHaveClass('text-gray-dark');
    });

    const variants = ['pink', 'blue', 'navy', 'red'] as const;

    test('should have light dark text if has variant', () => {
      render(<Button variant={variants[0]}>{TEXT}</Button>);

      expect(screen.getByRole('button')).toHaveClass('text-gray-light');
    });

    variants.forEach((v) => {
      test(`should be ${v}`, () => {
        render(<Button variant={v}>{TEXT}</Button>);

        expect(screen.getByRole('button')).toHaveClass(
          `bg-${v} hover:bg-${v}/80 focus:outline-${v}/80`,
        );
      });
    });
  });
});
