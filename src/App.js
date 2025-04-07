import React from "react";
import s from "./App.css";
import Header from "./Components/Header/Header";
import Dialogs from "./Components/Dialogs/Dialogs";
import Navbar from "./Components/Navbar/Navbar";
import Profile from "./Components/Profiile/Profile"; // Исправил путь
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

function App(props) {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <Header />
                <Navbar />
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer
                        />} />

                        <Route path="/profile" element={<Profile
                        />}
                        />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

