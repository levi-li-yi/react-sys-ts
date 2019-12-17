import React, {Suspense, useState} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import router from './router/index';
import {StoreContext} from 'redux-react-hook';
import './App.css';
import store from './store';

const App: React.FC = () => {
 // const {routers: Array<, setRouter} = useState(router)
  return (
    <Router>
      <Suspense fallback={<span></span>}>
        <StoreContext.Provider value={store}>
          <div className="App">
            {
              router.map((item, index) => {
                const Components: any = item.Component
                return <Route 
                  path={item.path}
                  exact={item.exact}
                  key={index}
                  render={props => (
                      <Components {...props} routes={item.routes}/>
                  )}/>
              })
            }
          </div>
        </StoreContext.Provider>
      </Suspense>
    </Router>
  );
}

export default App;
