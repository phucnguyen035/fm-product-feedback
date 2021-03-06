import { ButtonAddFeedback } from 'app/core/components/ButtonAddFeedback';
import { Meta } from 'app/core/components/Meta';
import { Wrapper } from 'app/core/components/Wrapper';
import Main from 'app/core/layout/Main';
import Empty from 'assets/suggestions/illustration-empty.svg';
import { BlitzPage } from 'blitz';

const IndexPage: BlitzPage = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <Wrapper className="grid h-full place-items-center">
        <div className="space-y-12 text-center">
          <div className="flex justify-center">
            <Empty />
          </div>

          <div>
            <h2 className="mb-4 text-h1 font-bold text-navy">There is no feedback yet.</h2>
            <p className="text-navy-light">
              Got a suggestion? Found a bug that needs to be squashed? <br /> We love hearing about
              new ideas to improve our app.
            </p>
          </div>

          <div>
            <ButtonAddFeedback />
          </div>
        </div>
      </Wrapper>
    </Main>
  );
};

export default IndexPage;
