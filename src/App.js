import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container content">
          <Navbar />
          <main className="main">
            <Switch>
              <Route exact path="/">
                <Profile />
              </Route>
              <Route path="/dialogs">
                <DialogsContainer />
              </Route>
              <Route exact path="/news">
                <News />
              </Route>
              <Route exact path="/music">
                <Music />
              </Route>
              <Route exact path="/settings">
                <Settings />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </BrowserRouter>

  )
}



export default App;
