import { GetServerSideProps } from 'next';

import { ButtonAddFeedback } from '@/components/ButtonAddFeedback';
import { Meta } from '@/components/Meta';
import { Wrapper } from '@/components/Wrapper';
import Main from '@/layout/Main';

import Empty from '../assets/suggestions/illustration-empty.svg';

export default function IndexPage() {
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
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
