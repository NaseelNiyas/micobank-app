import { Box, Button, Flex, Heading, Text } from 'native-base';
import React from 'react';
import Wrapper from '../components/Wrapper';

const Balance = () => {
  return (
    <Wrapper>
      <Box>
        
        <Flex direction='row' align={'center'} justify='center' mt='10'>
          <Heading fontSize={'7xl'} mb='2'>
            45
          </Heading>
          <Text fontSize={'xl'} mt='5' ml='3'>
            MBNC
          </Text>
        </Flex>
        <Flex>
          <Button mx='2'>Buy MBNC</Button>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Balance;
