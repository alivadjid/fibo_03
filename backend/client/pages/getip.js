import publicIp from '../node_modules/public-ip';


    async function getip() {
        
        var c = await publicIp.v4();
        
        return c;
    }
    
export default getip;

