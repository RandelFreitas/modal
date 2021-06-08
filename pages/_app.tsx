import { ModalProvider } from "../context/controllerModal"

const MyApp = ({ Component, pageProps }) => {
  return (
    <ModalProvider> 
      <Component {...pageProps} />
    </ModalProvider>
  );
}

export default MyApp
