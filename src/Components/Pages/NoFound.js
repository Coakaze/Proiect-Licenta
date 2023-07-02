import Header from "../../Header";
import Footer from "../../Footer";
import TopBar from "../../TopBar";
import { Text } from "@chakra-ui/react";

export default function NoFound() {
    return (
        <>
            <TopBar />
            <Header />
            <div style={{ width: "80%", margin: "100px auto 40px auto" }}>
                <Text fontSize='40px'>Pagina nu a fost gasita.</Text>
            </div>
            <Footer />
        </>
    )
}