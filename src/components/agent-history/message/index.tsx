import { Typography } from '@mui/material';
import Image from 'next/image';

import Flex from '@/components/ui-kit/flex';
import { IMessage } from '@/types/agent';

import { DotsStyled } from './styles';

type Props = {
  message: IMessage;
  isLoading?: boolean;
};

const Message = ({ message, isLoading }: Props) => {
  const isAssistantMsg = message.role === 'assistant';

  const position = isAssistantMsg ? { mr: 'auto' } : { ml: 'auto' };
  const maxWidth = isAssistantMsg ? '100%' : '80%';

  return (
    <Flex
      flexDirection="column"
      maxWidth={maxWidth}
      gap={1}
      p="12px 20px"
      borderRadius="12px"
      bgcolor="background.secondary"
      sx={{ ...position, wordBreak: 'break-word' }}
    >
      {isAssistantMsg && (
        <Flex alignItems="center" gap={2} mb={2}>
          <Image
            src="/static/logo.jpg"
            width={24}
            height={24}
            alt="Image logo"
            style={{ borderRadius: '50%' }}
            priority
          />
          <Typography variant="body3">UNIFAI</Typography>
        </Flex>
      )}
      {isLoading ? (
        <MessageLoadingState />
      ) : (
        <Typography component="pre" whiteSpace="pre-line">
          {message.content}
        </Typography>
      )}
    </Flex>
  );
};

const MessageLoadingState = () => (
  <DotsStyled sx={{ width: '120px' }}>
    <span></span>
    <span></span>
    <span></span>
  </DotsStyled>
);

export default Message;
