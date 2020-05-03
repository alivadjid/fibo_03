import Head from 'next/head';
import Nav from './navbar';
import Form from './form';



export default function HomePage() {
    return (
        <div>
        <Head>
            
            <title> Fibbonachi</title>
            <link rel="stylesheet" 
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" 
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" 
            crossOrigin="anonymous"></link>

           
        </Head>
            
            <Nav />
            <p> Welcome to fibonachi example</p>
            <Form />
                      
        </div>
    );
}