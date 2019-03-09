import React from 'react';

const Routes = () => {
    return (
        <>
            <Switch>
                <Route exact path="/"></Route>
                <Route exact path="/home"></Route>
                <Route exact path="/about"></Route>
                <Route exact path="/list"></Route>
                <Route exact path="/item"></Route>
                <Route exact path="/item/:id"></Route>
                {/* <Route component={NoMatch}></Route> */}
            </Switch>
        </>
    )
}