import React from 'react';
import app from '../firebaseConfg'

export default class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            senha:'',
        }

        this.changeEmail=this.changeEmail.bind(this)
        this.changeSenha=this.changeSenha.bind(this)
        this.criaUsuario=this.criaUsuario.bind(this)

    }

    componentDidMount(){

    }

    criaUsuario(e){
        e.preventDefault()  

        app.auth().
        createUserWithEmailAndPassword(
            this.state.email,
            this.state.senha
        )
        .then(()=>{
            this.props.history.push("/");
        })
    
        .catch((error)=>{
            alert(error.mamsege)
        })    
    }

    
    changeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    changeSenha(e){
        this.setState({
            senha: e.target.value
        })
    }

    render (){
        return (
            <form onSubmit={this.criaUsuario}>
                <h2>crie sua conta</h2>

                <label htmlFor="Email">Email</label>
                <input onChange={this.changeEmail} value={this.state.email} type="Email" name="Email"/>

                <label htmlFor="password">senha</label>
                <input onChange={this.changeSenha} value={this.state.password} type="password" name="password"/>

                 <input type="submit" value="criar"/>   

            </form>
        )
    }
}