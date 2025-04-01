import store from "./redux/store";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Создаем root один раз
const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = () => {
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 store = {store} />
        </React.StrictMode>
    );
}

// Начальный рендер
rerenderEntireTree(store.getState());

// Подписываемся на обновление состояния
store.subscribe(rerenderEntireTree);
