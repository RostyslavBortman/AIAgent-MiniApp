'use client';

import SignOut from '@/components/sign-out';
import { withAuth } from '@/hocs/with-auth';

const Home = () => {
  return (
    <>
      <SignOut />
    </>
  );
};

export default withAuth(Home);
