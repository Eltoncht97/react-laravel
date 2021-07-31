import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom'
import { startChecking } from '../actions/auth'
import { startLoadingNotes } from '../actions/notes'
import { Login } from '../components/Login'
import { Notas } from '../components/Notas'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {

    const dispatch = useDispatch()

    const { checking, id } = useSelector(state => state.auth)

    useEffect(() => {
        dispatch( startChecking() )
    }, [dispatch])

    useEffect(() => {
        if(!!id) {
            dispatch( startLoadingNotes() )
        }
    }, [id])

    if ( checking ) {
        return <h5>Espere...</h5>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute
                        exact
                        path="/login"
                        component={Login}
                        isAuthenticated={!!id}
                    />
                    <PrivateRoute
                        exact
                        path="/"
                        component={Notas}
                        isAuthenticated={!!id}
                    />
                    {/* <Route exact path="/" component={Notas} />
                    <Route path="/login" component={Login} /> */}
                    <Redirect to="/" />
                </Switch>
            </div>
        </Router>
    )
}
