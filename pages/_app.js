import '../styles/globals.css'
import '/public/assets/css/colors/red.css'
// import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    {/* <Script src="/assets/plugins/js/jquery.min.js" /> */}
  </>
}

export default MyApp
