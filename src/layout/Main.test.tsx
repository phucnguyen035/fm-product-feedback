import { fireEvent, render, screen } from '@testing-library/react';

import Main from './Main';

describe('<Main />', () => {
  it('should render correctly', () => {
    render(<Main meta={<></>}>Test</Main>);

    expect(screen.getAllByRole('heading', { level: 1, name: 'Frontend Mentor' })).toHaveLength(2);
    expect(screen.getByText('Test')).toBeInTheDocument();
  });

  it('should change sort by option', () => {
    render(<Main meta={<></>}>Test</Main>);

    const sortElement = screen.getByText('Sort by:');

    fireEvent.click(sortElement);
    fireEvent.click(screen.getByText('Least Upvotes'));

    expect(sortElement).toHaveTextContent('Sort by: Least Upvotes');
  });
});
