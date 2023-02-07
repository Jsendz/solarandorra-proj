import { Card, CardBody, CardFooter, Text, Stack, Heading, Divider, ButtonGroup, Button, Image } from '@chakra-ui/react'

import React from 'react'

export const Chackra = () => {
  return (
    <div className="w-full h-full 2xl:h-screen  ">
        <h2 className="p-5 text-center text-3xl lg:text-6xl text-slate-800 font-extrabold">Els nostres Serveis</h2>
        <p className="p-5 text-center text-2xl lg:text-4xl text-amber-600 font-bold">Lo que oferim per asegurar que la teva llar sigui lo mes eficient i autosostenible.</p>
        <div className="w-full max-w-7xl flex flex-col lg:flex-row justify-around items-center mx-auto py-6 lg:pt-20 px-2">
        <div className="py-4 lg:py-0">
   <Card maxW='sm'  boxShadow='2xl' >
  <CardBody>
    <Image
      src='https://cdn.pixabay.com/photo/2015/10/09/09/55/insulation-978999_960_720.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'  >Aislamiento</Heading>
      <Text >
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Contactanos!
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card >
   </div>
   <div className="py-4 lg:py-0">
   <Card maxW='sm'  boxShadow='2xl' >
  <CardBody>
    <Image 
      src='https://cdn.pixabay.com/photo/2021/04/26/19/01/heat-pump-6209793_960_720.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' >Aerotermia</Heading>
      <Text >
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Contactanos!
      </Button>
     
    </ButtonGroup>
  </CardFooter>
</Card>

   </div>
   <div className="py-4 lg:py-0">
   <Card maxW='sm'  boxShadow='2xl'>
  <CardBody>
    <Image
      src='https://cdn.pixabay.com/photo/2012/03/03/23/11/alternative-21581_960_720.jpg'
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md' >Paneles Solares</Heading>
      <Text >
        This sofa is perfect for modern tropical spaces, baroque inspired
        spaces, earthy toned spaces and for people who love a chic design with a
        sprinkle of vintage design.
      </Text>
     
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Contactanos!
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>

   </div>
   </div>

    </div>
  )
}
