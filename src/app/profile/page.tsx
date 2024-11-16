'use client';

import SignOut from '@/components/sign-out';
import { withAuth } from '@/hocs/with-auth';

const ProfilePage = () => {
  return <SignOut />;
};

export default withAuth(ProfilePage);
