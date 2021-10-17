import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

// Convert in function 
const Navbar = props => {
    return(
        <div className='navbar bg-primary'>
            <h1>
                <i className={props.icon}></i>
                {props.title}
            </h1>   
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>

        </div>
    )
}


// export class Navbar extends Component {
//         // using default props in same components if props is not pass 
//     static defaultProps = {
//         title: 'Github Finder',
//         icon: 'fab fa-github'
//     }
//         // type checking using proptypes
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//         icon: PropTypes.string.isRequired,
//     }
//     render() {
//         return (
//             <div className='navbar bg-primary'>
//                 <h1>
//                     <i className={this.props.icon}></i>
//                     {' ' + this.props.title}
//                 </h1>
//             </div>
//         )
//     }
// }

// props types in function components
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
}
// default props in function
Navbar.defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
}

export default Navbar
