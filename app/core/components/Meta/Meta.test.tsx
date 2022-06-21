import { render } from 'test/utils';

import { Meta } from '.';

jest.mock('next/head', () => ({
  __esModule: true,
  default: ({ children }: { children: Array<React.ReactElement> }) => {
    return <>{children}</>;
  },
}));

describe('<Meta />', () => {
  it('should inject title all meta tags to document', async () => {
    const title = 'Title';
    const description = 'description';
    const canonical = 'https://example.com';

    render(<Meta title={title} description={description} canonical={canonical} />, {
      container: document.head,
    });

    expect(document.title).toBe(title);
    expect(document.querySelector<HTMLMetaElement>(`meta[name="description"]`)?.content).toBe(
      description,
    );
    expect(document.querySelector<HTMLLinkElement>(`link[rel="canonical"]`)?.href).toContain(
      canonical,
    );
  });
});
