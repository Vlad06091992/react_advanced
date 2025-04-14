import {render} from "react-dom";
import {Counter} from "./components/Counter";

export const App = () => {
    return (<div>hello world
    <Counter/>
    </div>)
}

const domNode = document.getElementById('root');
render(<App />, domNode);


