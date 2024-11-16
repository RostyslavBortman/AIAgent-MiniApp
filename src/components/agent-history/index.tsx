import { useEffect } from 'react';

import { useAgentHistoryContext } from '@/contexts/AgentHistoryContext';
import Flex from '../ui-kit/flex';
import { NAVBAR_HEIGHT } from '@/constants/heights';
import Loader from '../ui-kit/loader';
import { IMessage } from '@/types/agent';

import Message from './message';

const AgentHistory = () => {
  const { agentHistory, isLoading, isMessageSending } = useAgentHistoryContext();

  useEffect(() => {
    if (agentHistory!.length) {
      const body = document.querySelector('body');
      if (body) {
        setTimeout(() => {
          window.scroll({
            top: document.body.scrollHeight,
            behavior: 'smooth',
          });
        }, 200);
      }
    }
  }, [agentHistory]);

  if (isLoading || !agentHistory) {
    return <Loader />;
  }

  return (
    <Flex flexDirection="column" width="100%" gap={3} px={4} mt="auto" pb={`${NAVBAR_HEIGHT}px`}>
      {agentHistory.map(message => (
        <Message key={message.content + guidGenerator()} message={message} />
      ))}
      {isMessageSending && <Message message={MockMessage} isLoading={true} />}
    </Flex>
  );
};

const guidGenerator = () => {
  const S4 = function () {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  };
  return S4() + S4() + '-' + S4() + '-' + S4() + '-' + S4() + '-' + S4() + S4() + S4();
};

const MockMessage: IMessage = {
  content: 'Mock mock',
  role: 'assistant',
};

export default AgentHistory;
