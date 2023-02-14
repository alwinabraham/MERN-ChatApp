import React from 'react'
import { Container, Box, Text, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react'
import Login from '../components/Authentication/Login.js'
import Signup from '../components/Authentication/Signup.js'


const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        display='flex'
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="1g"
        borderWidth="1px"
      >
        <Text fontSize='3xl' fontFamily="Work sans" color="black">
        Talk-A-Tive
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="1g" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage