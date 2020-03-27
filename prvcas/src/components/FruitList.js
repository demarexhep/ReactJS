import React from 'react';

export class FruitList extends React.Component {
    render() {
        console.log(this.props)
        return (
            <div id="fruits">
                {this.props.ovosje.map((fruit, i) => {
                    return (
                        <h5 key={i}>{fruit}</h5>
                    )
                })}
            </div>
        )
    }
}