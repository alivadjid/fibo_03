import publicIp from '../node_modules/public-ip';
import fetch from '../node_modules/node-fetch'
//function getip() {
    async function getip() {
        //console.log(await publicIp.v4());
        var c = await publicIp.v4();
        //console.log(c);
        return c;
    }
    //var b = ip()
    //.then(res => {b = res})
    //.then(() => console.log(b));
    //return b;
//}
    //console.log(b);
export default getip;

    /*
   
    fetch("http://gd.geobytes.com/GetCityDetails", {
  headers: {
    Accept: "application/json",
  },
})
  .then((response) => response.json())
  .then((response) => JSON.parse(res.data)) 
  .then((data) => console.log(data))
  .catch((ex) => console.log("parsing failed", ex))
    
}
export default getip

/*
    async function ip() {
        //console.log(await publicIp.v4());
        var c = await publicIp.v4();
        //console.log(c);
        return c;
    }
    var b;
    ip()
    .then(res => {b = res})
    .then(() => console.log(b));
    return b;
    //console.log(b);
**/

