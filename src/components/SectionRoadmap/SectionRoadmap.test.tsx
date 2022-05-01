import { render, screen } from '@testing-library/react';

import { SectionRoadmap } from '.';
import { getColor } from './SectionRoadmap';

describe('getColor', () => {
  it('should return text-orange for Planned', () => {
    expect(getColor({ key: 'Planned', value: 2 })).toBe('text-orange');
  });
  it('should return text-pink for In-progress', () => {
    expect(getColor({ key: 'In-progress', value: 3 })).toBe('text-pink');
  });
  it('should return text-blue for Live', () => {
    expect(getColor({ key: 'Live', value: 1 })).toBe('text-blue');
  });
  it('should throw an error for unknown key', () => {
    expect(() => getColor({ key: 'Unknown', value: 1 })).toThrow();
  });
});

describe('<SectionRoadmap />', () => {
  it('should render correctly', () => {
    render(<SectionRoadmap />);

    expect(screen.getAllByRole('listitem')).toHaveLength(3);
  });
});
