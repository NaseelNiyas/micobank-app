import { Box } from 'native-base';
import React from 'react';

const Wrapper = ({children}: {children: JSX.Element | JSX.Element[]}) => {
  return (
    <Box
      _dark={{
        backgroundColor: 'coolGray.900',
      }}
      minHeight={'100%'}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
