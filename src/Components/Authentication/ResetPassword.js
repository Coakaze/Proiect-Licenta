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
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function setErrorMessage(code) {
    if (code === 'auth/weak-password') {
        return 'Parola trebuie sa aiba cel putin 6 caractere.';
    } else if (code === 'auth/invalid-action-code') {
        return 'Eroare, reveniti la pagina principala.';
    } else {
        return 'Eroare.'
    }
}

function useQuery() {
    const location = useLocation();
    return new URLSearchParams(location.search);
}

export default function ResetPassword() {
    const [newPassword, setNewPassword] = useState();
    const { resetPassword } = useAuth();
    const query = useQuery();
    const toast = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        if (!query.get('oobCode')) {
            navigate('/acasa');
        }
    })

    return (
        <>
            <TopBar />
            <Header />
            <Container maxW='400px' style={{ marginTop: "80px", marginBottom: "50px" }}>
                <Heading as='h4' size='md' my={5}>
                    Resetare Parola
                </Heading>
                <chakra.form
                    onSubmit={async e => {
                        e.preventDefault()
                        resetPassword(query.get('oobCode'), newPassword)
                            .then(response => {
                                navigate('/confirmare-resetare-parola');
                            })
                            .catch(error => {
                                console.log(error.message);
                                let errorMessage = setErrorMessage(error.code);
                                toast({
                                    description: errorMessage,
                                    status: 'error',
                                    duration: 9000,
                                    isClosable: true,
                                })
                            })
                    }}
                >
                    <Stack spacing='6'>
                        <FormControl id='email'>
                            <FormLabel fontSize='sm' >Introduceti noua voastra parola.</FormLabel>
                            <Input
                                name='password'
                                type='password'
                                autoComplete='password'
                                required
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                            />
                        </FormControl>
                        <Button type='submit' colorScheme='blue' size='md' fontSize='md'>
                            Schimba parola
                        </Button>
                    </Stack>
                </chakra.form>
            </Container>

            <Footer />
        </>
    )
}