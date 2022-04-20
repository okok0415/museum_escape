import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "./Home/Home";


function Router() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact={true}><Home /></Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;