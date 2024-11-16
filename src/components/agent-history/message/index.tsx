import { Typography } from '@mui/material';

import Flex from '@/components/ui-kit/flex';
import { IMessage } from '@/types/agent';

type Props = {
  message: IMessage;
};

const Message = ({ message }: Props) => {
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
      bgcolor="gray.600"
      sx={{ ...position, wordBreak: 'break-word' }}
    >
      {isAssistantMsg && <Typography variant="body3">UNIF AI</Typography>}
      <Typography component="pre" whiteSpace="pre-line">
        {message.content}
      </Typography>
    </Flex>
  );
};

export default Message;
