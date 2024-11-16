'use client';

import { withAuth } from '@/hocs/with-auth';
import AgentInput from '@/components/agent-input';
import AgentHistory from '@/components/agent-history';

const Home = () => {
  return (
    <>
      <AgentHistory />
      <AgentInput />
    </>
  );
};

export default withAuth(Home);
