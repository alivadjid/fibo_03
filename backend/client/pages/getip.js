import PublicIp from '../node_modules/public-ip';

/** Get client ip 
 * @return c - client IP
*/
async function Getip() {
  const c = await PublicIp.v4();
  return c;
}
export default Getip;

