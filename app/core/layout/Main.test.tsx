import { fireEvent, render } from 'test/utils';

import Main from './Main';

describe('<Main />', () => {
  it('should render correctly', () => {
    const { getAllByRole, getByText } = render(<Main meta={<></>}>Test</Main>);

    expect(getAllByRole('heading', { level: 1, name: 'Frontend Mentor' })).toHaveLength(2);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should change sort by option', () => {
    const { getByText } = render(<Main meta={<></>}>Test</Main>);

    const sortElement = getByText('Sort by:');

    fireEvent.click(sortElement);
    fireEvent.click(getByText('Least Upvotes'));

    expect(sortElement).toHaveTextContent('Sort by: Least Upvotes');
  });
});
