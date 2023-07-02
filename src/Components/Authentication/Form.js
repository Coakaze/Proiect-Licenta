import {
    ModalBody,
    Button,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement
} from '@chakra-ui/react'
import { useRef, useState } from 'react'

export default function Form() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    return (
        <>
            <ModalBody pb={6}>
                <FormControl mb={5} variant="floating" id="email" isRequired>
                    <Input placeholder=' ' />
                    <FormLabel>Email</FormLabel>
                </FormControl>

                <FormControl mt={4} variant="floating" id="password" isRequired>
                    <InputGroup>
                        <Input type={show ? 'text' : 'password'} placeholder=' ' />
                        <FormLabel>Parola</FormLabel>
                        <InputRightElement width='4.5rem'>
                            <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Ascunde' : 'Arata'}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </ModalBody>
        </>
    );
}