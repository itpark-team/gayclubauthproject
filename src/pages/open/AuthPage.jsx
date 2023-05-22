import React, {useEffect, useState} from 'react';
import AuthApiWorker from "../../api/AuthApiWorker";
import LocalStorageWorker from "../../store/LocalStorageWorker";
import {useNavigate} from "react-router-dom";

const AuthPage = () => {

    let [username, setUsername] = useState("");
    let [password, setPassword] = useState("");

    let authApiWorker = new AuthApiWorker();
    let localStorageWorker = new LocalStorageWorker();

    let navigate = useNavigate();

    const auth = (e) => {
        e.preventDefault();

        let userCredentials = {
            "username": username,
            "password": password
        }

        authApiWorker.authenticateUser(userCredentials).then(
            response => {
                localStorageWorker.saveToken(response.data.token);
                alert("вы успешно авторизованы");
                navigate("/secure/user");
            })
            .catch(error => {
                alert("неправильная пара логин-пароль");
                console.log(error);
            });
    }

    return (
        <div>
            <h1>Auth Page</h1>
            <form onSubmit={auth}>
                <div>username:
                    <input type="text" value={username}
                           onChange={event => setUsername(event.target.value)}/>
                </div>
                <div>password:
                    <input type="text" value={password}
                           onChange={event => setPassword(event.target.value)}/>
                </div>
                <input type="submit" value="authenticate"/>
            </form>
        </div>
    );
};

export default AuthPage;