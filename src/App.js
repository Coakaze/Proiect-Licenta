import './App.css';
import Home from './Home.js';
import { Routes, Route, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Bratari from './Bratari.js';
import Pietre from './Pietre.js';
import Pandantive from './Pandantive.js';
import ProductDetail from './ProductDetail.js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import AuthContextProvider from './Context/AuthContext';
import ForgotPassword from './Components/Authentication/ForgotPassword';
import ResetPassword from './Components/Authentication/ResetPassword';
import ConfirmResetPassword from './Components/Authentication/ConfirmResetPassword';
import NoFound from './Components/Pages/NoFound';
import CartWrapper from './Components/Cart/CartWrapper';
import Cart from './Components/Cart/Cart';
import Profile from './Components/Profile/Profile';
import OrderSummary from './Components/OrderSummary/OrderSummary';
import ThankYou from './Components/OrderSummary/ThankYou';
import UserOrders from './Components/Profile/UserOrders';
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)"
};
export const theme = extendTheme({
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles
              }
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label": {
              ...activeLabelStyles
            },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top"
            }
          }
        }
      }
    }
  }
});

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/acasa", element: <Home /> },
  { path: "/produse", element: <Bratari /> },
  { path: "/pietre", element: <Pietre /> },
  { path: "/pandantive", element: <Pandantive /> },
  { path: "/detalii-produs/:id", element: <ProductDetail /> },
  { path: "/parola-uitata", element: <ForgotPassword /> },
  { path: "/resetare-parola", element: <ResetPassword /> },
  { path: "/confirmare-resetare-parola", element: <ConfirmResetPassword /> },
  { path: "/cart", element: <Cart /> },
  { path: "/profil", element: <Profile /> },
  { path: "/sumar-comanda", element: <OrderSummary /> },
  { path: "/comanda-finalizata", element: <ThankYou /> },
  { path: "/istoric-comenzi", element: <UserOrders /> },
  { path: "*", element: <NoFound /> }
])

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthContextProvider>
        {/* <Routes>
          <Route path="/acasa" element={<Home />} />
          <Route path="/produse" element={<Bratari />} />
          <Route path="/pietre" element={<Pietre />} />
          <Route path="/pandantive" element={<Pandantive />} />
          <Route path="/detail" element={<ProductDetail />} />
          <Route path="/parola-uitata" element={<ForgotPassword />} />
          <Route path="/resetare-parola" element={<ResetPassword />} />
          <Route path="/confirmare-resetare-parola" element={<ConfirmResetPassword />} />
          <Route path="*" element={<NoFound />} />
        </Routes> */}
        <CartWrapper route={router}></CartWrapper>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default App;
