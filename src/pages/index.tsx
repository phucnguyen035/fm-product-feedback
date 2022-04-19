import Meta from '@/components/Meta';
import Main from '@/layout/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <h1 className="text-h1">Hello world</h1>
    </Main>
  );
};

export default Index;
