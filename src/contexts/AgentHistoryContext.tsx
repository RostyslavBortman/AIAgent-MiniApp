import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { IMessage } from '@/types/agent';
import useChat from '@/hooks/chat/useChat';

export type AgentHistoryContextType = {
  agentHistory: IMessage[];
  onChangeHistory: (msg: IMessage) => void;
  isLoading: boolean;
  isMessageSending: boolean;
};

export const AgentHistoryContext = createContext<AgentHistoryContextType>({
  agentHistory: [],
  onChangeHistory: () => {},
  isLoading: false,
  isMessageSending: false,
});

export const AgentHistoryContextProvider = ({ children }: PropsWithChildren) => {
  const { data, isLoading, sendMessage, isMessageSending } = useChat();
  const [history, setHistory] = useState<IMessage[]>([]);

  useEffect(() => {
    if (data) {
      setHistory(data);
    }
  }, [data]);

  const onAdd = (message: IMessage, prevList: IMessage[]): IMessage[] => {
    return [...prevList, message];
  };

  const onChange = useCallback((message: IMessage) => {
    sendMessage(message.content);
    setHistory(prevList => {
      return onAdd(message, prevList);
    });
  }, []);

  return (
    <AgentHistoryContext.Provider
      value={{
        agentHistory: history,
        onChangeHistory: onChange,
        isLoading: isLoading,
        isMessageSending: isMessageSending,
      }}
    >
      {children}
    </AgentHistoryContext.Provider>
  );
};
export const useAgentHistoryContext = () => {
  return useContext(AgentHistoryContext);
};
