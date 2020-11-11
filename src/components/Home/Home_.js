import React, {Component} from 'react'
import {connect} from 'react-redux'
import Home from './Home'

export class HomeContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            username: '',
            password:'',
            images: [
              require('_assets/images/image1.jpg'),          // Local image
              require('_assets/images/image2.jpg'),          // Local image
              require('_assets/images/image3.jpg'),          // Local image
            ]
        }
    }

    handleOnChangeUsername = (value) => {
        this.setState({username: value})
    }

    handleOnChangePassword = (value) => {
        this.setState({password: value})
    }

    render(){
        return(
            <Home
                {...this.props} 
                {...this.state}
                handleOnChange={this.handleOnChange}
                handleOnChangePassword={this.handleOnChangePassword}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer); 
// export default HomeContainer

