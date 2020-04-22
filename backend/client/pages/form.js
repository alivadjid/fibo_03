
import axios from "axios";
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
        let data = {pp: number};
        data = JSON.stringify(data);
        
        
        fetch('http://localhost:3001/number', {
            method: 'post',
            body:  data,
            headers: { "Content-Type": "application/json"}
        }).then(function(responce) {
            console.log('data submit success');
        }).catch(function(error) {
            console.log('got err', error);
        })
        /*
        axios.post('http://localhost:3001/number', {
            countValue: number
        }). then((response) => {
            console.log('data submitted success');
        }).catch((error) => {
            console.log('got err', error);
        });
        */
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