import { useEffect, useRef, useState } from 'react';
import NorthIcon from '@mui/icons-material/North';

import { useAgentHistoryContext } from '@/contexts/AgentHistoryContext';

import {
  AgentInputPlaceholder,
  AgentInputStyled,
  AgentInputWrapper,
  AgentSendIconButton,
} from './styles';

const initialValue = '';

const AgentInput = () => {
  const { onChangeHistory } = useAgentHistoryContext();

  const [value, setValue] = useState(initialValue);
  const inputRef = useRef<null | HTMLDivElement>(null);

  const onInput = (event: React.FormEvent<HTMLDivElement>) => {
    setValue(event.currentTarget.textContent || initialValue);
  };

  const onPlaceholderClick = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    if (inputRef) {
      inputRef.current?.focus();
    }
  }, [inputRef]);

  const onSend = () => {
    onChangeHistory({ content: value, role: 'user' });

    setValue('');
    inputRef!.current!.textContent = initialValue;
  };

  const isEmpty = value === initialValue;

  return (
    <>
      <AgentInputWrapper>
        <AgentInputStyled
          ref={inputRef}
          onInput={onInput}
          contentEditable
          suppressContentEditableWarning
        />

        {value === '' && (
          <AgentInputPlaceholder onClick={onPlaceholderClick}>
            Message to AI Agent
          </AgentInputPlaceholder>
        )}

        <AgentSendIconButton
          onClick={onSend}
          disabled={isEmpty}
          sx={isEmpty ? { ['&:disabled']: { bgcolor: 'gray.400' } } : {}}
        >
          <NorthIcon />
        </AgentSendIconButton>
      </AgentInputWrapper>
      <textarea style={{ display: 'none' }} />
    </>
  );
};

export default AgentInput;
