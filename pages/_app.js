import '../styles/globals.css'
import '/public/assets/css/colors/red.css'
import '/public/assets/icons/font-awesome-4.7.0/css/font-awesome.min.css'
import '/public/assets/plugins/css/animate.css'
import '/public/assets/plugins/css/bootstrap.min.css'
// import '/public/assets/plugins/css/owl.css'
{/* <link rel="stylesheet" href="" /> */}

// import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return <>
    <Component {...pageProps} />
    {/* <Script src="/assets/plugins/js/jquery.min.js" /> */}
  </>
}

export default MyApp
