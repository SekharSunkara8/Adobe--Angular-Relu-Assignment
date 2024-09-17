import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

const withPrivate = (Component) => {
    const AuthRoute = (props) => {
        const auth = useSelector(state => state.authReducer.token)
        // console.log(auth)
        return auth ? <Component {...props} /> : <Navigate to="/auth/login" />
        
    }
    return AuthRoute
  
}

export default withPrivate