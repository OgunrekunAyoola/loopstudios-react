import Header from "./components/header";
import Showcase from "../src/components/showcase"
import Interactive from "./components/interactive";
import Creations from "./components/creation";
import Css from "../src/App.css"

function App(){
    return(
        <div>
            <Header/>
            <Showcase/>
            <Interactive/>
            <Creations/>
        </div>
    );
}

export default App;