import getip from "./getip";
import axios from "axios";
//import publicIp from '../node_modules/public-ip';


class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
        //var ip = getip()
        //.then (res =>  { ip = res })
        //.then (() => console.log(ip));
        //console.log(ip);
        //console.log(this.ip);
        //console.log(typeof ip);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    
    handleSubmit(event) {
        var number = this.state.value;
        var date = new Date().toLocaleString('ru-RU');
        //date1 = new Date().toLocaleString();
        console.log(date);
        
        
        //ip.then(alert);
        
        //let data = {pp: number};
        //data = JSON.stringify(data);
        
/*
        axios({
            method: 'post',
            url: 'http://localhost:3001/number',
            body: data
        })
            .then(function (responce) {
                console.log(responce);
            })
            .catch(function (error) {
                console.log(error);
            });
        /*
        fetch('http://localhost:3001/number', {
            method: 'post',
            body:  data,
            headers: { "Content-Type": "application/json"}
        }).then(function(responce) {
            console.log('data submit success');
        }).catch(function(error) {
            console.log('got err', error);
        })*/
        
        
        getip().then(ip => {
        
        
        // send do Back and get result
        axios.post('http://localhost:3001/number', {
            body: number,
            bodyIp: ip,
            bodyDate: date
        }). then((res) => {
            //console.log(res);
            //console.log(res.data);
            let Nnumber = JSON.parse(res.data) ;
            alert('To: '+ number + ',corresponds: ' + Nnumber + ' ,from Fibbonachi line' );
            //lam = res;
            //console.log(lam);
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