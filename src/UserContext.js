import React, { Component } from 'react'

const UserContext = React.createContext(true)

class UserProvider extends Component {

    state = {
        token: 'hello',
    }

    setToken = token => {
        localStorage.setItem('token', token);
        // this.setState(prevState => ({ token }))
    }

    render() {
        const { children } = this.props
        const { token } = this.state
        const { setToken } = this

        return (
            <UserContext.Provider
                value={{
                    token,
                    setToken,
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }
}

export default UserContext

export { UserProvider }