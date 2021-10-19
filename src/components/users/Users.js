import React, {useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../layouts/Spinner'
// import PropTypes from 'prop-types'
import GithubContext from '../../context/githubContext/GithubContext';


    // Destructuring directly
// const Users = ({ users , loading }) => {  no need data destructuring because data is come from GithubContext
const Users = () => {
// const Users = (props) => {

        // initialze GithubContext
    const githubContext = useContext(GithubContext)
        // Destructuring from githubContext
    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div style={userStyle} >
               
                {/* passing props from app component use props instead of state */}
                {/* {props.users.map(user => ( */}
                {users.map(user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

    // no need in githubContext
// Users.prototype = {
//     users: PropTypes.array.isRequired,
//     loading: PropTypes.bool.isRequired,
// }





// export class Users extends Component {

        // state in same component
    // state = {
    //     users: [
    //         {
    //             id: 1,
    //             login: 'mojombo',
    //             avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    //             html_url: 'https://github.com/mojombo',
    //         },
    //         {
    //             id: 2,
    //             login: 'defunkt',
    //             avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
    //             html_url: 'https://github.com/defunkt',
    //         },
    //         {
    //             id: 3,
    //             login: 'pjhyett',
    //             avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4"',
    //             html_url: 'https://github.com/pjhyett',
    //         },
    //     ]
    // }

    // render() {
    //     return (
    //         <div style={userStyle} >
    //             {/* passing props to UserItem component using map function, data get from state in same component */}
    //             {/* {this.state.users.map(user => (
    //                 <UserItem key={user.id} user={user} />
    //             ))} */}

    //             {/* passing props from app component use props instead of state */}
    //             {this.props.users.map(user => (
    //                 <UserItem key={user.id} user={user} />
    //             ))}
    //         </div>
    //     )
    // }
// }

const userStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem'
}

export default Users
