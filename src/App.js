import React, {Fragment, useState} from 'react'
// import Basic from './Basic/Basic'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users';
import axios from 'axios'
import Search from './components/users/Search';
import { Alert } from './components/layouts/Alert';
import About from './components/pages/About';
import User from './components/users/User';

const App = () => {

  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null)

// class App extends Component {
//   state = {
//     users: [],
//     user: {},
//     repos: [],
//     loading: false,
//     alert: null,
//   }

      // Just for Intialize application purpose then remove it
  // async componentDidMount() {
    // axios from yarn add axios
    // axios.get(`https://api.github.com/users`).then(res => console.log(res.data))
      
      // async method
  //   this.setState({ loading: true })
  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  //   this.setState({users: res.data, loading: false})
  //   // console.log(res.data);
  // }

  // This function is called from the search component by passing props up
  const searchUsers = async (text) => {
      // this.setState({ loading: true }) in class component
      setLoading(true)
      const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      // this.setState({users: res.data.items, loading: false}) in class component
      setUsers(res.data.items);
      setLoading(false)
    }

  const getUser = async (username) => {
      // this.setState({ loading: true }) in class method
      setLoading(true)
      const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      // this.setState({user: res.data, loading: false}) in class method
      setUser(res.data);
      setLoading(false);
    }
  
  const getUserRepos = async (username) => {
      // this.setState({ loading: true }) in clas method
      setLoading(true);
      const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
      // this.setState({repos: res.data, loading: false}) in class method
      setRepos(res.data);
      setLoading(false);
    }
      // in class method
  // clearUsers = () => this.setState({ users: [], loading: false })
  const clearUsers = () => {
    setUsers([])
    setLoading(false);
  }

  const displayAlert = (msg, type) => {
      // this.setState({ alert: { msg: msg, type: type } })
          // Destructuring or simplify
      // this.setState({ alert: { msg , type } }) in class method
      setAlert({ msg, type });
          // in class method
      // setTimeout(() => {
      //   this.setState({ alert: null })
      // }, 5000);
      setTimeout(() => setAlert(null), 4000)
    }
          // in class component
  // render() {
          // Destructuring from state
    // const {users, user,repos, loading} = this.state

    return (
    <Router>
      <div className="App">
          {/* <Basic /> */}
          <Navbar />
          <div className='container' >
          <Alert alert={alert} />
            <Switch>
              <Route exact path='/' render={ props => (
                <Fragment>
                  {/* received props up from search */}
                  <Search  searchUsers={searchUsers}
                  clearUsers={clearUsers}
                  // showClear={this.state.users.length > 0 ? true : false}
                  //use destructuring
                  showClear={users.length > 0 ? true : false}
                  setAlert={displayAlert}
                  />
                   {/* <Users loading={this.state.loading} users={this.state.users} /> */}
                          {/* //use destructuring */}
                  <Users loading={loading} users={users} />
                </Fragment>
              )} /> 
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={ props => (
                <User {...props} getUser={getUser}
                  getUserRepos={getUserRepos}
                  user={user}
                  repos={repos} 
                  loading={loading} />
              )} />         
            </Switch>
          </div>
      </div>
    </Router>
    ) 
  }
// }


export default App;
