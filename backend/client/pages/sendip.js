import getip from "./getip";
import axios from "axios";


function Sendip() {
    getip().then (ip => {
        axios.post('http://localhost:3001/sqld', {
            sIp: ip
        }).catch((error) => {
            console.log('take error', error);
        }); 

    })
    return 'IP';
};

export default Sendip;