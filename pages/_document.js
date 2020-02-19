import Document, { Html, Head, Main, NextScript } from "next/document";
import "../public/static/css/globalCss.scss";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html className="html" lang="en">
                <Head/>

                <body>
                    <Main/>
                    <NextScript/>
                </body>

            </Html>
        )
    }
}

export default MyDocument;