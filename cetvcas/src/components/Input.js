import React from 'react'

export class Input extends React.Component {
    render() {
        console.log(this.props)
        return (

            
                <p>
                    <input
                        type={this.props.type}
                        placeholder={this.props.placeholder}
                        name={this.props.name}
                        onChange={this.props.onChange}
                    />
                    {this.props.name === "password" ?
                        <button className="eye-button" onClick={this.props.toggle} type="button">
                            <i className={"fa" + (this.props.type === "password" ? "fa-eye-slash" : "fa-eye")}></i>
                        </button> : null
                    }
                </p>
          
        )
    }
}