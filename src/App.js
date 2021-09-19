import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {MyContext} from "./context";
import Stage1 from "./components/stage1";
import Stage2 from "./components/stage2";
import  './App.css'
class  App extends React.Component{
    static contextType=MyContext
    render() {
        return(
            <div className="wrapper">
            <div className="center-wrapper">
                <h1> Who pays the bill?</h1>
                {
                    this.context.state.stage===1?
                        <Stage1/>:<Stage2/>
                }
            </div>
            </div>
        )
    }
}
export default App
