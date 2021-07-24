import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Setting/Settings';

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
                <Profile profilePage={props.state.profilePage} addPost={props.addPost} updatePostValue={props.updatePostValue}/>
              </Route>
              <Route path="/dialogs">
                <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} updateDialogsValue={props.updateDialogsValue} />
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
