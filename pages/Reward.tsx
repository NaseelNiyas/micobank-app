import { useNavigation } from '@react-navigation/native';
import {
  Box,
  Button,
  Heading,
  Input,
  Select,
  Text,
  useToast,
} from 'native-base';
import React, { useState } from 'react';
import Wrapper from '../components/Wrapper';

const Reward = () => {
  const [child, setChild] = useState('');
  const [amount, setAmount] = useState('');
  const [message, setMessage] = useState('');
  
  const navigate = useNavigation();
  const toast = useToast();

  return (
    <Wrapper>
      <Heading ml='2' mb='2'>
        Reward some MBNC
      </Heading>
      <Select
        placeholder='To'
        mx='4'
        onValueChange={(value) => setChild(value)}
        selectedValue={child}
      >
        <Select.Item label='Jack' value='Jack' />
        <Select.Item label='John' value='John' />
        <Select.Item label='Jill' value='Jill' />
        <Select.Item label='Jin' value='Jin' />
      </Select>
      <Input
        placeholder='Amount'
        mx='8'
        mt='2'
        value={amount}
        onChangeText={(a) => setAmount(a)}
      />
      <Input
        placeholder='Message'
        mx='8'
        mt='2'
        value={message}
          onChangeText={(t) => setMessage(t)}
      />
      <Button
        mt='2'
        mx='4'
        onPress={() => {
          toast.show({
            render: () => {
              return (
                <Box bg='emerald.500' px='2' py='1' rounded='sm' mb={5}>
                  Successfully sent {amount} to {child}
                </Box>
              );
            },
          });
          navigate.goBack();
        }}
      >
        Go
      </Button>
    </Wrapper>
  );
};

export default Reward;
