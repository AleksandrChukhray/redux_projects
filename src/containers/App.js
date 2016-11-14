import React, { Component } from 'react'
import { connect } from 'react-redux'

class App extends Component{
    render (){
        const {name , surname, age } = this.props.user
        return <div> Привет из App, {this.props.user} !</div>
    }
}

function mapStateToProps(state){
    return {
        user: state.user
    }
}

export default connect (mapStateToProps)(App)
