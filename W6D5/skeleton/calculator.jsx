import React from 'react';

// const Congrats = () => <h1>Congratulations, you did it!</h1>;

class Calculator extends React.Component {
    constructor(props){
        super(props);
        this.state = { result: 0, num1: '', num2: '' };


        this.setNum1 = this.setNum1.bind(this);
        this.setNum2 = this.setNum2.bind(this);
        this.add = this.add.bind(this);
        this.subtract = this.subtract.bind(this);
        this.multiply = this.multiply.bind(this);
        this.divid = this.divid.bind(this);
        this.clear = this.clear.bind(this);
    }

    render() {
        const { result, num1, num2} = this.state;
        return (
            <div>
                <h1>Hello SAFUH World</h1>
                <h1>{this.state.result}</h1>
                <input type="text" value={num1} onChange={this.setNum1}/>
                <input type="text" value={num2} onChange={this.setNum2}/>
                <button onClick={this.clear}>clear</button>

                
                <br/>
                <button onClick={this.add}><h1>+</h1></button>
                <button onClick={this.subtract}><h1>-</h1></button>
                <button onClick={this.multiply}><h1>*</h1></button>
                <button onClick={this.divid}><h1>/</h1></button>
            </div>
        );
    }

    setNum1(e) {
        const num1 = e.target.value ? parseInt(e.target.value) : "";
        this.setState({num1});
    }

    setNum2(e) {
        const k = e.target.value ? parseInt(e.target.value) : "";        
        this.setState({ num2: k });
    }

    
    add (e) {
        e.preventDefault()
        const number = this.state.num1 + this.state.num2;
        this.setState({result: number})
    }
    
    subtract (e) {
        e.preventDefault()
        const number = this.state.num1 - this.state.num2;
        this.setState({result: number})
    }
    
    multiply (e) {
        e.preventDefault()
        const number = this.state.num1 * this.state.num2;
        this.setState({result: number})
    }
    
    divid (e) {
        e.preventDefault()
        const number = this.state.num1 / this.state.num2;
        this.setState({result: number})
    }
    
    
    clear (e) {
        e.preventDefault();
        this.setState({ num1: '' })
        this.setState({ num2: '' })
    }
}


export default Calculator;
