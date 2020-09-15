import React, {Component} from 'react'
import {connect} from 'react-redux'
import Login from './Login'

export class LoginContainer extends Component{
    constructor(props){
        super(props)
        this.state={
            enable: false,
            username: '',
            password: '',
            images: [
                require('../../image/image1.jpg'),          // Local image
                require('../../image/image2.jpg'),          // Local image
                require('../../image/image3.jpg'),          // Local image
              ]
        }
    }

    componentDidMount(){
        // this.setState({password: localStorage.getItem('password')})
    }

    handleOnChangeUsername = (value) => {
        this.setState({username: value})
    }

    handleOnChangePassword = (value) => {
        this.setState({password: value})
        
    }

    handleOnSubmit = () => {
        const {username, password} = this.state
        // localStorage.setItem("password", this.state.password);
        if(username==='test' && password==='aabbccdd'){
            this.props.navigation.navigate('Home')
        }
    }

    render(){
        return(
            <Login
                {...this.props} 
                {...this.state}
                handleOnChangeUsername={this.handleOnChangeUsername}
                handleOnChangePassword={this.handleOnChangePassword}
                handleOnSubmit={this.handleOnSubmit}
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer); 
// export default LoginContainer

