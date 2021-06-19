import React, { Component } from 'react'
import Calculatorcss from './Calculator.css'

export default class Calculator extends Component {
    constructor(props) {
    super(props);
    this.state = {value: ''}
}
    
    
    render() {

        // let multiply = (num1, num2) => {
        //     return num1 * num2
        // }

        // let divide = (num1, num2) => {
        //     return num1 / num2
        // }

        // let add = (num1, num2) => {
        //     return num1 + num2
        // }

        // let subtract = (num1, num2) => {
        //     return num1 - num2
        // }
        
        let calVals = ['(',')', '%', 'C',7,8,9,'/',4,5,6,'x',1,2,3,'-',0,'.','=','+']

        let handleClick = (event) => {
            console.log(`you clicked`,event.target.value,)
            this.setState({ value: event.currentTarget.value })

            if ('C' === event.target.value) {
                this.setState({ value: ''})
            }
        }

        return (
            <center>
                <h1 className='App'>REACT-U-LATOR</h1>

                <input className='calForm' type='text' value={this.state.value}></input> <br /> <br />
                
                {calVals.map((val) => {
                    return (
                        <div className='grid-container'>
            
                            <ul><button className='calButtons' type='text' value={val} onClick={handleClick}>{val}</button></ul>
                        </div>)
                })}
                
                <br />

            </center>
        )
    }
}
