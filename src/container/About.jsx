import React, { Component } from 'react'
import Login from '../component/Login'
import Registro from '../component/Registro'

export default class About extends Component {
    render() {
        return (
            <div>
                <Login/>
                <Registro/>
            </div>
        )
    }
}
