import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const withPublic = (Component) => {
    const AuthRoute = (props) => {
        const auth = useSelector(state => state.authReducer.token)
        // console.log(auth)
        return auth ? <Navigate to="/" /> : <Component {...props} />
    }
    return AuthRoute
  
}

export default withPublic