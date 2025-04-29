import React from "react";
import s from "./App.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import {withSuspense} from "./Components/Hoc/withSuspense";

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profiile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer")); // ✅ добавил lazy

const DialogsContainerWithSuspense = withSuspense(DialogsContainer);
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);
const UsersContainerWithSuspense = withSuspense(UsersContainer); // ✅ обёртка

function App() {
    return (
        <BrowserRouter>
            <div className="App-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainerWithSuspense />} />
                        <Route path="/profile" element={<ProfileContainerWithSuspense isMain={true} />} />
                        <Route path="/profile/:userId" element={<ProfileContainerWithSuspense />} />
                        <Route path="/users" element={<UsersContainerWithSuspense />} /> {/* ✅ fixed */}
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
