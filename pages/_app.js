import '../styles/globals.css'
import {MintrestProvider} from '../context/MintrestContext'

function MyApp({ Component, pageProps }) {


  return (
  <MintrestProvider>
    <Component {...pageProps} />
  </MintrestProvider>)
}

export default MyApp
