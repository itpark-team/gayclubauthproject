import React from 'react';
import {Link} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
            <h1>Это главная страница сайта</h1>
            <p>Для начала работы с системой пожалуйста
                <Link to="/auth"> войдите</Link>
            </p>
        </div>
    );
};

export default MainPage;