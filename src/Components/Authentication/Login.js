import {
    ModalHeader,
    ModalFooter,
    ModalCloseButton,
    Button,
    ModalBody,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    useToast,
    chakra
} from '@chakra-ui/react'
import '../../App.css';
import { useState } from 'react'
import { useAuth } from '../../Context/AuthContext';
import GoogleAuth from './GoogleAuth';
import useMounted from '../../hooks/useMounted';
import { useNavigate } from 'react-router-dom';

function setErrorMessage(code) {
    if (code === 'auth/wrong-password') {
        return 'Parola este gresita.';
    } else if (code === 'auth/user-not-found') {
        return 'Adresa de e-mail nu exista. Creati-va un cont.';
    } else {
        return 'Eroare.'
    }
}

export default function Login() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();

    const { login } = useAuth();

    const mounted = useMounted();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast({
                description: "Credentialele nu exista.",
                status: 'error',
                duration: 5000,
                isClosable: true
            })
        }
        setIsSubmitting(true);
        login(email, password)
            .then((response) => {
                navigate(0);
                navigate('/acasa');
                //navigate('/acasa', { state: { modal: true } });
            })
            .catch((error) => {
                let errorMessage = setErrorMessage(error.code);
                console.log(error.code)
                toast({
                    description: errorMessage,
                    status: 'error',
                    duration: 5000,
                    isClosable: true
                })
            }).finally(() => mounted.current && setIsSubmitting(false))
    }
    return (
        <>
            <ModalBody>
                <GoogleAuth></GoogleAuth>
            </ModalBody>
            <ModalHeader>Logheaza-te acum!</ModalHeader>
            {/* <div class="hrContainer">
                <hr class="hr-text" data-content="Continuati cu email si parola"></hr>
            </div> */}
            <ModalCloseButton />
            <chakra.form onSubmit={handleFormSubmit}>
                <ModalBody pb={6}>
                    <FormControl mb={5} variant="floating" id="email" isRequired>
                        <Input onChange={(e) => setEmail(e.target.value)} value={email} name='email' placeholder=' ' type='email' />
                        <FormLabel>Email</FormLabel>
                    </FormControl>

                    <FormControl mt={4} variant="floating" id="password" isRequired>
                        <InputGroup>
                            <Input onChange={(e) => setPassword(e.target.value)} value={password} name='password' type={show ? 'text' : 'password'} placeholder=' ' />
                            <FormLabel>Parola</FormLabel>
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Ascunde' : 'Arata'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button type='submit' isLoading={isSubmitting} style={{ width: "100%" }} colorScheme='blue' mr={3}>
                        Logare
                    </Button>
                </ModalFooter>
                <p><a href="/parola-uitata">Ai uitat parola?</a></p>
            </chakra.form>

        </>
    );
}