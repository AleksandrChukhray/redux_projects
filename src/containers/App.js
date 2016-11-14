import React, { Component } from 'react'
import { connect } from 'react-redux'
import User from '../components/User'
import Page from '../components/Page'

//компонент и его реализация
class App extends Component {
    render() {
        const { user, page } = this.props
        return <div>
            <User name={user.name} />
            <Page photos={page.photos} year={page.year} />
        </div>
    }
}

//связываем данные store c компонентом App посредством функции
function mapStateToProps(state){
    return {
        user: state.user,
        page: state.page
    }
}


//сама связь
export default connect (mapStateToProps)(App)
