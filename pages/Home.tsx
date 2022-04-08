import { Box, Button, Flex, Heading, Image, Text } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Wrapper from '../components/Wrapper';

const Home = () => {
  const navigation = useNavigation();
  return (
    <Wrapper>
      <Box>
        <Flex align={'center'} justify='center'>
          <Image source={require('../img/profile.png')} w='20' h='20' mb='2' />
          <Heading mb='2'>Welcome, Jane</Heading>
        </Flex>
        <Button
          /* @ts-ignore */
          onPress={() => navigation.navigate('Reward')}
          mx='3'
          colorScheme='yellow'
        >
          Reward
        </Button>
        {/* @ts-ignore */}
        <Button onPress={() => navigation.navigate('Balance')} mx='3' mt='2'>
          Balance
        </Button>
        <Flex direction='row' justify={'space-between'}>
          <Button
          /* @ts-ignore */
            onPress={() => navigation.navigate('Settings')}
            w='45%'
            mr='2'
            ml='2'
            mt='2'
          >
            <EvilIcon name='gear' size={30} />
          </Button>
          <Button
          /* @ts-ignore */
            onPress={() => navigation.navigate('Settings')}
            w='45%'
            mt='2'
            mr='2'
          >
            <MaterialIcon name='account' size={30} />
          </Button>
        </Flex>
      </Box>
      <Box mt='4'>
        <Heading ml='2'>Recent Transactions</Heading>
        <Flex mt='2'>
          <Flex
            direction='row'
            justify={'space-between'}
            px='2'
            bg='coolGray.800'
            py='2'
          >
            <Box>8 MBNC</Box>
            <Box>John</Box>
            <Box>24 March</Box>
          </Flex>
          <Flex
            direction='row'
            justify={'space-between'}
            px='2'
            bg='coolGray.700'
            py='2'
          >
            <Box>4 MBNC</Box>
            <Box>Jack</Box>
            <Box>23 March</Box>
          </Flex>
          <Flex
            direction='row'
            justify={'space-between'}
            px='2'
            bg='coolGray.800'
            py='2'
          >
            <Box>6 MBNC</Box>
            <Box>Jin</Box>
            <Box>21 March</Box>
          </Flex>
          <Flex
            direction='row'
            justify={'space-between'}
            px='2'
            bg='coolGray.700'
            py='2'
          >
            <Box>6 MBNC</Box>
            <Box>Jack</Box>
            <Box>21 March</Box>
          </Flex>
          <Flex
            direction='row'
            justify={'space-between'}
            px='2'
            bg='coolGray.800'
            py='2'
          >
            <Box>4 MBNC</Box>
            <Box>Jill</Box>
            <Box>20 March</Box>
          </Flex>
        </Flex>
      </Box>
    </Wrapper>
  );
};

export default Home;
