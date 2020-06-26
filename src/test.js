import React, { Component } from 'react'
import UserContext from './UserContext'

export default class HomePage extends Component {
    static contextType = UserContext

    func(token, setToken){
        const newToken = { name: 'Joe' }
        setToken(newToken)
    }

    render() {
        const { token, setToken } = this.context

        return (
            <div>
                <button
                    onClick={() => {
                        this.func(token, setToken)
                    }}
                >
                    Update User
                </button>
                <p>{`Current User: ${token.name}`}</p>
            </div>
        )
    }
}