import React from 'react'
import {Route, Switch} from 'react-router-dom';

import Homepage from './screens/Homepage';
import Footer from './components/Footer';
import PokeList from './screens/PokeList';
import PokeScreen from './screens/PokeScreen';
import Error from './screens/Error';

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/" component={Homepage} exact/>
                <Route path="/pokelist" component={PokeList} />
                <Route path="/pokescreen/:id" component={PokeScreen} />
                <Route component={Error} />
            </Switch>
            <Footer />
        </>
    )
}

export default App;