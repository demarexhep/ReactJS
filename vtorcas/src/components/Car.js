import React from 'react';

export class Car extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div id="car">
                <ul>
                    {this.props.cars.map((car, i) => {
                        return (
                            <li key={i}>
                                <span>Brend {car.brend}</span> &nbsp;
                                <span>Model {car.model}</span>  &nbsp;
                                <span>Godina {car.godina}</span>  &nbsp;
                            </li>
                        )
                    })}
                </ul>

                <ol>
                {this.props.registration.map((reg, i) => {
                    return (
                        <li key={i}>
                            <span>{reg.grad}</span> &nbsp;
                            <span>{reg.oznaka}</span>  &nbsp;
                            <span>{reg.tablica.tablica}</span>  &nbsp;
                        </li>
                    )
                })}
                </ol>
            </div>
        )
    }
}