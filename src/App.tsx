import React from "react"
import {Calculator} from "./components/Calculator.page";
import "./App.scss"


const App: React.FC = () => {
    return (
        <div className="app">
            <Calculator/>
        </div>
    )
}

export default App
