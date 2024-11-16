import { useEffect } from 'react';

import { useAgentHistoryContext } from '@/contexts/AgentHistoryContext';
import Flex from '../ui-kit/flex';
import { AGENT_INPUT_HEIGHT, NAVBAR_HEIGHT } from '@/constants/heights';
import Loader from '../ui-kit/loader';

import Message from './message';

const AgentHistory = () => {
  const { agentHistory, isLoading } = useAgentHistoryContext();

  useEffect(() => {
    if (agentHistory!.length) {
      const body = document.querySelector('body');
      if (body) {
        setTimeout(() => {
          body.scrollTop = body.scrollHeight;
        }, 500);
      }
    }
  }, [agentHistory]);

  if (isLoading || !agentHistory) {
    return <Loader />;
  }

  return (
    <Flex
      flexDirection="column"
      width="100%"
      gap={3}
      mt="auto"
      pb={`${NAVBAR_HEIGHT + AGENT_INPUT_HEIGHT}px`}
    >
      {agentHistory.map(message => (
        <Message key={message.content} message={message} />
      ))}
    </Flex>
  );
};

export default AgentHistory;
