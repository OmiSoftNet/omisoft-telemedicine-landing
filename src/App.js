import React from 'react';
import './App.css';
import './fonts/sofiapro-light.otf';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Main from './containers/Main/Main';
import ApplyForm from './containers/ApplyForm/ApplyForm';
import QuoteSended from './containers/QuoteSended/QuoteSended';

function App() {
  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/apply-form">
              <ApplyForm />
            </Route>
            <Route path="/quote-sended">
              <QuoteSended />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
