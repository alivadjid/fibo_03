import Axios from 'axios';
import Getip from './getip';

/** Class show input Form and send value to server */
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    const number = this.state.value;

    const date = new Date().toLocaleString('ru-RU');
    
    check();

    /** Check input value
     * @parem n - input value number
     * @return {number} Nnumber calculating result
     */

    function check() {
      var n = parseInt(number);
      if (isNaN(n)) {
        alert('Write a number!');
      } else if ( +number <= 0 ) {
        alert('Remember! Fibbonachi line start from 1. Write correct number')
      } else {

        /** Get client IP
        * @return {number} ip client IP
        */
        Getip().then(ip => {
        /** Send data to serv and take responce
        * @param {number} number client entered number
        * @param {number} ip client IP
        * @param {number} date request time
        */
          Axios.post('http://localhost:3001/number', {
            body: number,
            bodyIp: ip,
            bodyDate: date
          }). then((res) => {
            const Nnumber = JSON.parse(res.data) ;
            alert('To: ' + number + ',corresponds: ' + Nnumber + ' ,from Fibbonachi line' );
          }).catch((error) => {
            console.log('got err', error);
          });
        });
      }
    };   
    event.preventDefault();
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="InputNumber">Write number start from 1</label>
          <div className ="row">
            <div className="form-group col-xs-3">
              <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
            </div>
          </div> 
        </div>
        <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Calc</button>
      </form>
    );
  }
}
export default Form;