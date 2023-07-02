import Header from "../../Header";
import TopBar from "../../TopBar";
import Footer from "../../Footer";
import {
    Button,
    chakra,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    useToast,
    Container
} from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

function setErrorMessage(code) {
    if (code === 'auth/user-not-found') {
        return 'Email-ul nu a fost gasit in baza noastra de date.';
    } else {
        return 'Eroare.'
    }
}

export default function ForgotPassword() {
    const { forgotPassword, currentUser } = useAuth();
    const toast = useToast();
    const navigate = useNavigate();


    useEffect(() => {
        if (currentUser) {
            navigate('/acasa');
        }
    })

    const [email, setEmail] = useState('');
    return (
        <>
            <TopBar />
            <Header />
            <Container maxW='400px' style={{ marginTop: "80px", marginBottom: "50px" }}>
                <Heading as='h4' size='md' my={5}>
                    Parola uitata
                </Heading>
                <chakra.form
                    onSubmit={async e => {
                        e.preventDefault()
                        try {
                            await forgotPassword(email)
                            toast({
                                description: `Un email a fost trimis la ${email} pentru resetarea parolei`,
                                status: 'success',
                                duration: 9000,
                                isClosable: true,
                            })
                        } catch (error) {
                            let errorMessage = setErrorMessage(error.message);
                            toast({
                                description: errorMessage,
                                status: 'error',
                                duration: 9000,
                                isClosable: true,
                            })
                        }
                    }}
                >
                    <Stack spacing='6'>
                        <FormControl id='email'>
                            <FormLabel fontSize='sm' >Introduceti adresa de e-mail folosita la inregistrare</FormLabel>
                            <Input
                                name='email'
                                type='email'
                                autoComplete='email'
                                required
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <Button type='submit' colorScheme='blue' size='md' fontSize='md'>
                            Resetare parola
                        </Button>
                    </Stack>
                </chakra.form>
            </Container>

            <Footer />
        </>
    )
}