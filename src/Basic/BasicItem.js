import React, { Component } from 'react'

export class BasicItem extends Component {
    render() {
        return (
            <div className='navbar bg-primary' >
                    {/* use props into child components */}
               <h1> Component {this.props.title} </h1>
            </div>
        )
    }
}

export default BasicItem
