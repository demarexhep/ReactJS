import React from 'react';
import { Car } from './Car';
import { Comments } from './Comments'
import {User} from './User'

export class App extends React.Component {

    render() {
        var tablici = { tablica: "SK-0000-AB" };
        var vozila = [
            { brend: "Ford", model: "Fokus", godina: 2001 },
            { brend: "Opel", model: "Astra", godina: 2006 },
            { brend: "Opel", model: "Vectra", godina: 2010 }
        ]
        var registracija = [
            { grad: "Skopje", oznaka: "Sk", tablica: tablici },
            { grad: "Kumanovo", oznaka: "KU", tablica: tablici },
            { grad: "Tetovo", oznaka: "TE", tablica: tablici }
        ]
        var komentari = [
            { autor: "Filip", content: "This is a comment" },
            { autor: "Aleksander", content: "This is a prop" },
            { autor: "Petar", content: "This is Pecki" }
        ]
        return (
            <div id="app">
                <h1>Hello world</h1>
                <Car cars={vozila} registration={registracija} />
                <Comments
                    broj={55}
                    cifra={1}
                    date={"23.03.2020"}
                    comments={komentari}
                   
                />
                <User name={"filip"} lastName={"dz"}/>
                <User name={"stefan"} lastName={"st"}/>
                <User name={"dema"} lastName={"dm"}/>
                
            </div>

        )
    }
}