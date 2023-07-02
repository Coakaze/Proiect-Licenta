import {
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    useDisclosure,
    Tabs,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    background
} from '@chakra-ui/react'
import { useRef } from 'react'
import Register from './Register'
import Login from './Login'

export default function AuthenticationModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    return (
        <>
            <Button variant='ghost' onClick={onOpen}>
                <div class="icon"><iconify-icon icon="mdi:register-outline" width="28" height="28"></iconify-icon></div>
            </Button>

            <Modal
                blockScrollOnMount={false}
                initialFocusRef={initialRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <Tabs align='center'>
                        <TabList>
                            <Tab>Inregistrare</Tab>
                            <Tab>Logare</Tab>
                        </TabList>

                        <TabPanels>
                            <TabPanel>
                                <Register></Register>
                            </TabPanel>
                            <TabPanel>
                                <Login></Login>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>

                </ModalContent>
            </Modal>
        </>
    )
}
