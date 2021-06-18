import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';






const App = () => {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <div className="container content">
          <Navbar />
          <main className="main">
            <Switch>
              <Route path="/dialogs">
                <Dialogs />
              </Route>
              <Route path="/profile">
                <Profile />
              </Route>
              <Route path="/news">
                <News />
              </Route>
              <Route path="/music">
                <Music />
              </Route>
              <Route path="/settings">
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
