import React, {Component} from 'react'
import {connect} from 'react-redux'
import ListPage from './ListPage'

export class ListPageContainer extends Component{
  constructor(props){
    super(props)
    this.state={
      
    }
  }

  render(){
    return(
      <ListPage
        {...this.props}
        {...this.state}
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

export default connect(mapStateToProps, mapDispatchToProps)(ListPageContainer); 

