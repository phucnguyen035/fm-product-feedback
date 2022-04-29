import { render } from '@testing-library/react';

import { Meta } from '.';

// eslint-disable-next-line global-require
jest.mock('next/dist/client/router', () => require('next-router-mock'));
jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => {
    return <>{children}</>;
  },
}));

describe('Meta', () => {
  it('should inject title all meta tags to document', async () => {
    const title = 'Title';
    const description = 'description';
    const canonical = 'https://example.com';

    render(<Meta title={title} description={description} canonical={canonical} />, {
      container: document.head,
    });

    expect(document.title).toBe(title);
    expect(document.querySelector(`meta[name="${description}"]`)).toBeDefined();
    expect(document.querySelector(`link[rel="canonical"]`)).toBeDefined();
  });
});
