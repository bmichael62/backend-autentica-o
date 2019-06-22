import React from 'react'
import
  { 
    BrowserRouter as Router, 
    Route, 
    Link 
  } from "react-router-dom";
export default class Navigation extends React.Component{
    render(){
        return(
            <h1>
                <Link to="/">Home</Link>  
                <Link to="/sobre">About</Link>
                <Link to="/contatos">Contatos</Link>
                <Link to="/registro">registro</Link>
                <Link to="/login">login</Link>
            </h1>
        )
    }
}