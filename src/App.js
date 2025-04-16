import React from "react";
import s from "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import ProfileContainer from "./Components/Profiile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import LoginPage from "./Components/Login/Login";

function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainer />} />
                        <Route path="/profile" element={<ProfileContainer isMain={true} />} />
                        <Route path="/profile/:userId" element={<ProfileContainer />} />
                        <Route path="/users" element={<UsersContainer />} />
                        <Route path="/login" element={<LoginPage />} />

                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}
export default App;

