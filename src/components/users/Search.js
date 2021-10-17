import React from 'react'
import { Component } from 'react'
import PropTypes from 'prop-types'


class Search extends Component{

    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
        setAlert: PropTypes.func.isRequired,
    }

    // this method used for search
    onChange = (e) => {
        // Update text filled directlt
        // this.setState( {text: e.target.value} )
        // Update text file dynamically
        this.setState({ [e.target.name ]: e.target.value })
    }

    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.text === '') {
            this.props.setAlert('Please Enter a username', 'light');
        } else {
            // Sending data to App component
            this.props.searchUsers(this.state.text);
            this.setState({ text: '' })
        }
    }

    render(){
                // Destructuring
        const {showClear, clearUsers} = this.props;

        return (
            <div>
                <form onSubmit={this.onSubmit} className="form">
                    <input type="text" name='text' 
                    value={this.state.text} placeholder='Search Users' 
                    onChange={this.onChange}
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
}

export default Search