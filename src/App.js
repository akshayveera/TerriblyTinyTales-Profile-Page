
import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Profile from "./components/Profile";
import Posts from "./components/Posts";

const App = ()=>{
    return (
        <div className="">
            <Header/>
            <Profile/>
            <Posts/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);
