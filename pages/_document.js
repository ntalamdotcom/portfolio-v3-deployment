import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet" />
                    {/* <!-- Font Awesome --> */}
                    {/* <link rel="stylesheet" href="assets/icons/font-awesome-4.7.0/css/font-awesome.min.css" /> */}
                    {/* <!-- Bootstrap CSS --> */}
                    {/* <link rel="stylesheet" href="assets/plugins/css/bootstrap.min.css" /> */}
                    {/* <!-- Animate CSS--> */}
                    {/* <link rel="stylesheet" href="assets/plugins/css/animate.css" /> */}
                    {/* <!-- Owl Carousel CSS--> */}
                    {/* <link rel="stylesheet" href="assets/plugins/css/owl.css" /> */}
                    {/* <!-- Fancybox--> */}
                    <link rel="stylesheet" href="assets/plugins/css/jquery.fancybox.min.css" />

                    {/* <!-- Custom CSS--> */}
                    <link rel="stylesheet" href="assets/css/styles.css" />
                    <link rel="stylesheet" href="assets/css/responsive.css" />

                    {/* <!-- Colors --> */}
                    <link rel="alternate stylesheet" href="assets/css/colors/blue.css" title="blue" />
                    <link rel="stylesheet" href="assets/css/colors/defauld.css" title="defauld" />

                </Head>
                <body className="dark-vertion black-bg">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
export default MyDocument