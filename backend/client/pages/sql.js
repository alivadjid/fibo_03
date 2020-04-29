import Head from 'next/head';
import Nav from './navbar';
import Sqldata from './sqldata';

export default function sql() {
    return (
        <div>
        <Head>
            <title> MySQL</title>
            <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
            crossOrigin="anonymous"></link>
        </Head>
        
            <Nav />
            <p> Here SQL data from your IP</p>
            
            <Sqldata />
        </div>
    );
}