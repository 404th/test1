import { Switch, Route } from 'react-router-dom'
import HomePage from './Containers/HomePage'

function Layout () {
    return <Switch>
        <Route exact path={"/"} component={ HomePage } />
    </Switch>
}

export default Layout