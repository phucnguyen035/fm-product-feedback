import { fireEvent, render, screen } from '@testing-library/react';

import { SectionTags } from '.';

const tags = ['tag-1', 'tag-2'];

describe('<SectionTags />', () => {
  beforeEach(() => {
    render(<SectionTags tags={tags} />);
  });

  it('should have correct number of tags', () => {
    expect(screen.getAllByRole('listitem')).toHaveLength(tags.length + 1); // +1 for the 'all' tag
  });

  it('should highlight selected tag', () => {
    const selectedTag = screen.getByText(tags[0]!);

    fireEvent.click(selectedTag);

    expect(selectedTag).toHaveClass('bg-blue text-white');
  });
});
