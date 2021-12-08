import React, {Component} from 'react';
import './Login.css';
import { ButtonLogin } from '../ButtonLogin/ButtonLogin';


class Login extends Component {

    state = {
        credentials: {username: '', senha: ''}
    }

    login = event => {
        console.log(this.state.credentials);
        fetch('http://127.0.0.1:8000/auth/', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state.credentials)
        }).then(
            data => {
                console.log(data);
            }
        ).catch(err => console.error(err))

    }

    inputChanged = event => {
        const cred = this.state.credentials;
        cred[event.target.name] = event.target.value;
        this.setState({credentials: cred});
    }

     myFunction = event => {
        var x = event.target.type;
        if (x === "password") {
          x = "text";
        } else {
          x = "password";
        }
      }

    render(){
        return (

            <div className="log-container"> 
                <h1 className="log-title">Que bom que você vai usar o Direito Guru :) </h1>
                <p className="log-description"> Insira o login e senha para acessar sua conta</p>
                <div className="log-form"> 

                    <div className="log-fields">

                        <p className="log-name">Login</p>
                        <input className="log-input" type="text" name="username" 
                        value={this.state.credentials.username}
                        onChange={this.inputChanged}
                        placeholder="Seu nome de usuário"
                        />
                    
                    </div>
                    <br/>
                    <div className="log-fields"> 
                        <p className="log-name">Senha</p>
                        <input className="log-input" type="password" name="senha" 
                        value={this.state.credentials.senha}
                        onChange={this.inputChanged}
                        placeholder="Sua senha de acesso"
                        id="myInput"
                        
                        />
                        <div className="show-password"> 
                        <input type="checkbox" onclick="myFunction()"/> 
                        <p> Mostrar senha </p>
                        </div>
                    </div>


                <br/>
                <ButtonLogin
                onClick={this.login}
                className='btns'
                buttonStyle='btn--outline'
                buttonSize='btn--large'
                >
                ENTRAR
                </ButtonLogin>

                </div>



    
            </div>
            )

    }

}

export default Login;