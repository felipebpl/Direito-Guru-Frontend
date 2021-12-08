import React, {useState} from 'react';
import './Login2.css';
import { Button} from '../Button/Button';
import axios from 'axios';



function Login2(){

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const usernameChanged = (event) =>{
        setUsername(event.target.value);
    }

    const passwordChanged = (event) =>{
        setPassword(event.target.value);
    }

    const Login = (event) => {
        event.preventDefault();
        axios
            .post("http://127.0.0.1:8000/auth/", {username:username, password:password})
            .then((response) => {
                console.log(response);
                setUsername("");
                setPassword("");
            })
            .catch(err => console.error(err));
    }

    // function myFunction() {
    //     var x = document.getElementById("myInput");
    //     if (x.type === "password") {
    //       x.type = "text";
    //     } else {
    //       x.type = "password";
    //     }
    //   }

      return (

        <div className="log-container"> 
            <h1 className="log-title">Que bom que você vai usar o Direito Guru :) </h1>
            <p className="log-description"> Insira o login e senha para acessar sua conta</p>
            <div className="log-form"> 

                <div className="log-fields">

                    <p className="log-name">Login</p>
                    <input className="log-input" type="text" name="username" 
                    value={username}
                    onChange={usernameChanged}
                    placeholder="Seu nome de usuário"
                    />
                
                </div>
                <br/>
                <div className="log-fields"> 
                    <p className="log-name">Senha</p>
                    <input className="log-input"  name="password" 
                    value={password}
                    onChange={passwordChanged}
                    placeholder="Sua senha de acesso"
                    id="myInput"
                    type="password"
                    
                    />
                    {/* <div className="show-password"> 
                    <input type="checkbox" onclick={myFunction()}/> 
                    <p> Mostrar senha </p>
                    </div> */}
                </div>

                
            <br/>
            <button className="log-btn" onClick={Login}> ENTRAR </button>

            </div>

            <h3 className="cad-title">Não tem uma conta?</h3>

            <Button
            className='btns'
            buttonStyle='btn--outline2'
            buttonSize='btn--medium'
            >
                Cadastre-se aqui
            
            </Button>




        </div>
        )

      


}


export default Login2;