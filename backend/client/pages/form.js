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
        var writeNumber = this.state.value;
        
       console.log(writeNumber);
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