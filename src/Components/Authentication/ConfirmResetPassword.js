import Header from "../../Header";
import Footer from "../../Footer";
import TopBar from "../../TopBar";
import { Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function ConfirmResetPassword() {
    const navigate = useNavigate();
    return (
        <>
            <TopBar />
            <Header />
            <div style={{ width: "80%", margin: "80px auto 40px auto" }}>
                <Text fontSize='30px'>Parola dumneavoastra a fost resetata</Text>
                <Text fontSize='15px'>Va puteti loga cu noua parola. Veti fi redirectionati in cateva momente.</Text>
            </div>
            {setTimeout(() => {
                navigate('/acasa')
            }, 3000)}
            <Footer />
        </>
    )
}