import React from 'react';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';



            // Direct destructuring
const UserItem = ({user: {login, avatar_url, html_url}}) => {
    
    // Destructuring from props in function
    // const UserItem = (props) => {
    // const { login, avatar_url, html_url } = props.user

    return (
         //   Data received from users component instead of same state from props
        <div className='card text-center'>
            <img src={avatar_url} alt="Profile" style={{width:'60px', borderRadius:'50%'}} />
            <h3 style={{marginBottom:'10px'}}>{login}</h3>
            <Link to={`/user/${login}`} className='btn btn-dark btn-sm my-1' >Profile</Link>
        </div>
    )
}

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
}

// export class UserItem extends Component {
        // Old Method of state -- component state
    // constructor() {
    //     super();
    //     this.state = {
    //         // data hard cord
    //         id: 1,
    //         login: 'mojombo',
    //         avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4"',
    //         html_url: 'https://github.com/mojombo',
    //     }
    // }

       // New Method of state
        // state = {
        //     // data hard cord -- component state
        //     id: 1,
        //     login: 'mojombo',
        //     avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4"',
        //     html_url: 'https://github.com/mojombo',
        // }

    // render() {
            // Destructring in same state methed
        // const { login, avatar_url, html_url } = this.state

            // Destructring in props coming from users
            // const { login, avatar_url, html_url } = this.props.user

//         return (
//             <div className='card text-center'>

//                 {/* use state in same components -*/}
//                                                                     {/* Use inline style */}
//                 {/* <img src={this.state.avatar_url} alt="Profile" style={{width:'60px', borderRadius:'50%'}} /> */}
//                 {/* <h3 style={{marginBottom:'10px'}}>{this.state.login}</h3> */}
//                 {/* <a href={this.state.html_url} style={{cursor:'pointer', border:'2px solid red', borderRadius:'5px', backgroundColor:'red', color:'white', padding: '5px' }} >Profile</a> */}
                   
//                     {/* Using destructring instead of this.state*/}
//                 {/* <img src={avatar_url} alt="Profile" style={{width:'60px', borderRadius:'50%'}} />
//                 <h3 style={{marginBottom:'10px'}}>{login}</h3>
//                 <a href={html_url} style={{cursor:'pointer', border:'2px solid red', borderRadius:'5px', backgroundColor:'red', color:'white', padding: '5px' }} >Profile</a> */}
                
//                     {/* Data received from users component instead of same state from props*/}
//                 <img src={avatar_url} alt="Profile" style={{width:'60px', borderRadius:'50%'}} />
//                 <h3 style={{marginBottom:'10px'}}>{login}</h3>
//                 <a href={html_url} style={{cursor:'pointer', border:'2px solid red', borderRadius:'5px', backgroundColor:'red', color:'white', padding: '5px' }} >Profile</a>

//             </div>
//         )
//     }
// }

export default UserItem;
