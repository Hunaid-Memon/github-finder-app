import React, {Component, Fragment} from 'react'
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


class App extends Component {
  state = {
    users: [],
    user: {},
    repos: [],
    loading: false,
    alert: null,
  }

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
  searchUsers = async (text) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({users: res.data.items, loading: false})
  }

  getUser = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({user: res.data, loading: false})
  }
  
  getUserRepos = async (username) => {
    this.setState({ loading: true })
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({repos: res.data, loading: false})
    // console.log(res.data);
  }

  clearUsers = () => this.setState({ users: [], loading: false })

  setAlert = (msg, type) => {
    // this.setState({ alert: { msg: msg, type: type } })
        // Destructuring or simplify
    this.setState({ alert: { msg , type } })
    setTimeout(() => {
      this.setState({ alert: null })
    }, 5000);
  }

  render() {
          // Destructuring from state
    const {users, user,repos, loading} = this.state

    return (
    <Router>
      <div className="App">
          {/* <Basic /> */}
          <Navbar />
          <div className='container' >
          <Alert alert={this.state.alert} />
            <Switch>
              <Route exact path='/' render={ props => (
                <Fragment>
                  {/* received props up from search */}
                  <Search  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  // showClear={this.state.users.length > 0 ? true : false}
                  //use destructuring
                  showClear={users.length > 0 ? true : false}
                  setAlert={this.setAlert}
                  />
                   {/* <Users loading={this.state.loading} users={this.state.users} /> */}
                          {/* //use destructuring */}
                  <Users loading={loading} users={users} />
                </Fragment>
              )} /> 
              <Route exact path='/about' component={About} />
              <Route exact path='/user/:login' render={ props => (
                <User {...props} getUser={this.getUser}
                  getUserRepos={this.getUserRepos}
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
}


export default App;
