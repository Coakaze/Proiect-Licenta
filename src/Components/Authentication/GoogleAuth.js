import { Button } from "@chakra-ui/react";
import { FcGoogle } from 'react-icons/fc';
import { useAuth } from "../../Context/AuthContext";

export default function GoogleAuth() {
    const { signInWithGoogle } = useAuth();
    return (
        <Button onClick={() => signInWithGoogle().then(user => console.log(user)).catch(error => console.log(error))} mt={3} variant='outline' style={{ width: "100%" }} leftIcon={<FcGoogle />}>Continua cu Google</Button>
    )
}