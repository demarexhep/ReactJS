import React from 'react'
import { connect } from 'react-redux'
import { SayHello,lastName} from './../actions/SayHello'


class Hello extends React.Component {
    componentDidMount() {
        this.props.sayHello();
        this.props.lname();
    }

    render() {
        return (
            <div id="hello">
                <h2>Hello, {this.props.name}</h2>
                    <h2>Last Name {this.props.lastname}</h2>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        name: state.SayHelloReducer.name,
        lastname: state.SayHelloReducer.lastname
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        sayHello: () => {
            dispatch(SayHello())
        },
        lname: () => {
            dispatch(lastName())
        }
    }
}

export default connect(mapStateToProps, mapDispatchProps)(Hello);








