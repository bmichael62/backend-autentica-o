import React from 'react';
import app from '../firebaseConfg'

export default class Login extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            email:'',
            senha:'',
        }

        this.changeEmail=this.changeEmail.bind(this)
        this.changeSenha=this.changeSenha.bind(this)
        this.login=this.login.bind(this)

    }

    componentDidMount(){

    }

    login(e){
        e.preventDefault()  

        app.auth()
        .signInWithEmailAndPassword(
            this.state.email,
            this.state.senha
        )
        .then(()=>{
            // acessa o histórico do navegador com e o caminho da funação
            this.props.history.push("/");
        })
    
        .catch((error)=>{
            alert(error.message)
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
            <form onSubmit={this.login}>
                <h2>Entar</h2>

                <label htmlFor="Email">Email</label>
                <input onChange={this.changeEmail} value={this.state.email} type="Email" name="Email"/>

                <label htmlFor="password">senha</label>
                <input onChange={this.changeSenha} value={this.state.password} type="password" name="password"/>

                 <input type="submit" value="Entrar"/>   
            </form>
        )
    }
}