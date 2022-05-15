import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

export default function FeedbackAdd() {
  return (
    <>
      <p>Add feedback</p>
    </>
  );
}

FeedbackAdd.auth = true;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx);

  return {
    props: {
      session,
    },
  };
};
