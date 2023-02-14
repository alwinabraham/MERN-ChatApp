import { FormControl, Input, VStack, FormLabel, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
  const [confirm, setConfirm] = useState(false)
  const [show, setShow] = useState(false)
  const [name, setName] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmpassword, setconfirmpassword] = useState()
  const [pic, setPic] = useState();

  const handleClick = () => setShow(!show)
  const handleconfirmClick = () => setConfirm(!confirm)

  const postDetails = (pics) => {}

  const submitHandler = () => {}

  return (
    <VStack spacing='5px'>
      <FormControl id='first-name' isRequired>
        <FormLabel>Name</FormLabel>
        <Input
          placeholder='Enter Your Name'
          onChange={(e)=>setName(e.target.value)}
        />
      </FormControl>

      <FormControl id='email' isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder='Enter Your Email'
          onChange={(e)=>setEmail(e.target.value)}
        />
      </FormControl>

      <FormControl id='password' isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
        <Input
          type={show ? "text":"password"}
          placeholder='Enter Your Password'
          onChange={(e)=>setPassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='confirmPassword' isRequired>
        <FormLabel>ReEnter Password</FormLabel>
        <InputGroup>
        <Input
          type={confirm ? "text":"password"}
          placeholder='Reenter Your Password'
          onChange={(e)=>setconfirmpassword(e.target.value)}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleconfirmClick}>
            {confirm ? 'Hide' : 'Show'}
          </Button>
        </InputRightElement>
        </InputGroup>
      </FormControl>

      <FormControl id='pic'>
        <FormLabel>Upload your Picture</FormLabel>
        <Input
          type="file"
          p={1.5}
          accept="image/*"
          onChange={(e)=>postDetails(e.target.value[0])}
        />
      </FormControl>
      <Button colorScheme='blue' width="100%" style={{margintop:15}} onClick={submitHandler}>SignUp</Button>
    </VStack>
  )
}

export default Signup