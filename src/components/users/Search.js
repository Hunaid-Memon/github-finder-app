import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'

const Search = ({ showClear, clearUsers, setAlert, searchUsers }) => {

    const [text, setText] = useState('');



        // class base component 
// class Search extends Component{
//     state = {
//         text: ''
    // }

            // use proptype in class component
    // static propTypes = {
    //     searchUsers: PropTypes.func.isRequired,
    //     clearUsers: PropTypes.func.isRequired,
    //     showClear: PropTypes.bool.isRequired,
    //     setAlert: PropTypes.func.isRequired,
    // }

    // this method used for search and class base
    // onChange = (e) => {
            // Update text filled directly
        // this.setState( {text: e.target.value} )
             // Update text file dynamically
        // this.setState({ [e.target.name ]: e.target.value })
    // }
            // Convert in function base using useState
    const onChange = e => setText( e.target.value )

    const onSubmit = (e) => {
        e.preventDefault();
                // if (this.state.text === '') {
        if (text === '') {
            setAlert('Please Enter a username', 'light');
        } else {
            // Sending data to App component
            searchUsers(text);
            setText('');
        }
    }

        //use in class component
    // render(){
                // Destructuring in class 
        // const {showClear, clearUsers} = this.props;

    return (
        <div>
            <form onSubmit={onSubmit} className="form">
                <input type="text" name='text' 
                value={text} placeholder='Search Users' 
                onChange={onChange}
                />
                <input type="submit" value="Search" className='btn btn-dark btn-block' />
            </form>
                    {/* before destructring */}
            {/* {this.props.showClear && */}
            {showClear &&
                // <button onClick={this.props.clearUsers} className="btn btn-light btn-block">Clear</button>
                <button onClick={clearUsers} className="btn btn-light btn-block">Clear</button>
            }
            </div>
    )
}
// }

 Search.prototype = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

export default Search;