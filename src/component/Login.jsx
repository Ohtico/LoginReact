import React, { Component } from 'react'
import axios from 'axios'
import md5 from 'md5'

const url = 'https://appbiggiegun.herokuapp.com/usuario'

export default class Login extends Component {



    constructor(){
        super();
        this.state = {
            form:{
                username: '',
                password: ''
            }
        }
    }

    iniciarSesion = async () => {
        await axios.get(url, { params: { username: this.state.form.username, password: md5(this.state.form.password) } })
            .then(response => {
                return response.data;
            })
            .then(response => {
                if (response.length > 0) {
                    var respuesta = response[0];
                    alert(`Bienvenido ${respuesta.nombre} ${respuesta.apellido_paterno}`);
                } else {
                    alert('El usuario o la contraseña no son correctos');
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleChange = async e => {
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value 
            }
        });
        console.log(this.state.form) //imprimir todo el estado 
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.iniciarSesion();
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit} className="form-signin">
                <h1 className="h4 mb-3 font-weight-normal">
                    Inicio de sesión
                </h1>

                <input
                    type="email"
                    id="inputEmail"
                    className="form-control mt-1"
                    placeholder="Email"
                    required=""
                    name= "username"
                    onChange={this.handleChange}
                />

                <input
                    type="Password"
                    id="inputPassword"
                    className="form-control mt-1"
                    placeholder="Contreña"
                    required=""
                    name="password"
                    onChange={this.handleChange}
                />

                <button
                    type="submit"
                    className="btn btn-primary btn-block"
                >
                    Login
                </button>

                <div className="">
                    <p>Login with social networks</p>

                    <div className="google-btn btn-primary">
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                  <a
                    to=""
                    className="Link"
                   >
                    Create new account
                </a>
            </form>
        </div>
        )
    }
}
