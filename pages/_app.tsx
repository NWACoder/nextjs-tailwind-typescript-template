import { AppProps } from 'next/app';
import '../styles/main.css';

function Root({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}

export default Root;
