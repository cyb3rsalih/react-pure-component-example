import React, {PureComponent} from 'react'

class SecondNumber extends PureComponent{


    // React PureComponent or
    // shouldComponentUpdate(nextProps, nextState){
    //     return nextProps.secondNumber !== this.props.secondNumber
    // }

    render(){
        return(
            <div>
                {this.props.secondNumber}
            </div>
        )
    }
}

export default SecondNumber