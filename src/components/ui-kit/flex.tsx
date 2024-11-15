import { Box, BoxProps } from '@mui/material';

const Flex = ({ ...props }: Omit<BoxProps, 'display'>) => {
  return <Box display="flex" {...props} />;
};

export default Flex;
