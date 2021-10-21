import React from 'react';
import { Route, BrowserRouter as Router ,Redirect,Switch } from 'react-router-dom';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    return (
       <Router>
           <div>
               <Switch>
                    <Route
                        path='/auth'
                        component={ AuthRouter }/>

                    <Route
                        exact 
                        path='/'
                        component={ JournalScreen }
                    />
                    <Redirect to='/auth/login' /> 
               </Switch>
           </div>
       </Router>
    )
}
