import React from 'react'

export function Popup(props){
    return(
        <div className="popup">
        <button onClick={()=>{props.zatvoriSlika()}} className="close-popup">&times;</button>
        <div className="popup-container">
        <img src={props.photoUrl}/>
        </div>
        </div>
    )
}