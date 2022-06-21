import { fireEvent, render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { HeaderMobile } from '.';

const mockIntersectionObserver = jest.fn();
mockIntersectionObserver.mockReturnValue({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
});

window.IntersectionObserver = mockIntersectionObserver;

describe('<HeaderMobile />', () => {
  describe('when the navigation is not visible', () => {
    beforeEach(() => {
      render(<HeaderMobile />);
    });

    it('should have menu icon', () => {
      expect(screen.getByLabelText('Menu icon')).toBeInTheDocument();
    });

    it('should open menu when menu icon is clicked', () => {
      fireEvent.click(screen.getByLabelText('Menu icon'));

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('when the navigation is visible', () => {
    beforeEach(() => {
      render(<HeaderMobile />);
      fireEvent.click(screen.getByLabelText('Menu icon'));
    });

    it('should have close icon', () => {
      expect(screen.getByLabelText('Close icon')).toBeInTheDocument();
    });

    it('should close menu when close icon is clicked', async () => {
      fireEvent.click(screen.getByLabelText('Close icon'));

      await waitForElementToBeRemoved(() => screen.getByRole('dialog'));

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });
  });
});
