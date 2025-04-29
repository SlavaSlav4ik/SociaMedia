import React from "react";
import "./App.css"; // поправил импорт
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import { HashRouter, Routes, Route } from "react-router-dom"; // HashRouter вместо BrowserRouter
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import { withSuspense } from "./Components/Hoc/withSuspense"; // ✅

const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./Components/Profiile/ProfileContainer"));
const UsersContainer = React.lazy(() => import("./Components/Users/UsersContainer"));

const DialogsContainerWithSuspense = withSuspense(DialogsContainer);
const ProfileContainerWithSuspense = withSuspense(ProfileContainer);
const UsersContainerWithSuspense = withSuspense(UsersContainer);

function App() {
    return (
        <HashRouter> {/* ← заменено для gh-pages */}
            <div className="App-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="App-wrapper-content">
                    <Routes>
                        <Route path="/dialogs" element={<DialogsContainerWithSuspense />} />
                        <Route path="/profile" element={<ProfileContainerWithSuspense isMain={true} />} />
                        <Route path="/profile/:userId" element={<ProfileContainerWithSuspense />} />
                        <Route path="/users" element={<UsersContainerWithSuspense />} />
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </div>
            </div>
        </HashRouter>
    );
}

export default App;
