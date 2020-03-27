import React from 'react';
import PropTypes from 'prop-types'
export class User extends React.Component{
    render(){
        return(
            <div id="user">
            <h3>hello, {this.props.name} {this.props.lastName}</h3>
            </div>
        )
    }
}
User.propTypes={
    name:PropTypes.string.isRequired,
    lastName:PropTypes.string.isRequired
}