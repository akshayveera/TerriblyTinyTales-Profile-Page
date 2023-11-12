
import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header";
import Profile from "./Profile";
import Posts from "./Posts";

const App = ()=>{
    return (
        <div className="mb-20">
            <Header/>
            <Profile/>
            {/* <Posts/> */}
        </div>
    )
}

export default App;
