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
    InputRightElement, useToast, chakra
} from '@chakra-ui/react';
import GoogleAuth from './GoogleAuth';
import { useState } from 'react';
import { useAuth } from '../../Context/AuthContext';
import useMounted from '../../hooks/useMounted';
import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { collection, setDoc, doc } from 'firebase/firestore';

function setErrorMessage(code) {
    if (code === 'auth/weak-password') {
        return 'Parola trebuie sa aiba cel putin 6 caractere.';
    } else if (code === 'auth/email-already-in-use') {
        return 'Adresa de e-mail este deja inregistrata, alegeti alta sau logati-va.';
    } else if (code === 'auth/invalid-email') {
        return 'Va rugam sa introduceti adresa de e-mail in formatul corect.';
    } else {
        return 'Eroare.'
    }
}

export default function Register() {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const toast = useToast();
    const navigate = useNavigate();
    // const productCollectionRef = collection(db);

    const { register } = useAuth();

    const mounted = useMounted();

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            toast({
                description: "Credentials not valid",
                status: 'error',
                duration: 5000,
                isClosable: true
            })
        }
        setIsSubmitting(true);
        register(email, password)
            .then((response) => {
                console.log("response:");
                console.log(response.user);
                setDoc(doc(db, "users", response.user.uid), {
                    email: email,
                    lastName: '',
                    firstName: '',
                    phone: '',
                    address: '',
                    postalCode: ''
                });
                setDoc(doc(db, `users/${response.user.uid}/cart`, 'empty'), {});
                //navigate(0);
                navigate('/acasa');
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
            <ModalHeader>Creaza-ti un cont acum!</ModalHeader>
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
                        Inregistrare
                    </Button>
                </ModalFooter>
            </chakra.form>
        </>
    );
}