import getip from "./getip";
import axios from "axios";
//import publicIp from '../node_modules/public-ip';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    
    handleSubmit(event) {
        var number = this.state.value;
        var date = new Date().toLocaleString('ru-RU');
                
              
        getip().then(ip => {
        
        
        // send do Back and get result
        axios.post('http://localhost:3001/number', {
            body: number,
            bodyIp: ip,
            bodyDate: date
        }). then((res) => {
            
            let Nnumber = JSON.parse(res.data) ;
            alert('To: '+ number + ',corresponds: ' + Nnumber + ' ,from Fibbonachi line' );
           
        }).catch((error) => {
            console.log('got err', error);
        });
        })
        
              
        event.preventDefault();
        
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="InputNumber">Write number</label>
                        <div className ="row">
                            <div className="form-group col-xs-3">
                                <input type="text" className="form-control" value={this.state.value} onChange={this.handleChange}></input>
                            </div>
                        </div> 
                </div>
            <button type="submit" onClick={this.handleSubmit} className="btn btn-primary">Check</button>
        </form>
        );
    }
}

export default Form;