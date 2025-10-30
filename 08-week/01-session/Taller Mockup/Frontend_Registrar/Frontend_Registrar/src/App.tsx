import React from 'react';
import { IonApp } from '@ionic/react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import './theme/variables.css';

const App: React.FC = () => {
  return (
    <IonApp>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
        </Switch>
      </Router>
    </IonApp>
  );
};

export default App;