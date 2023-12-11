import React, {useState} from "react";

const App = () => {
    let [count,setCount] = useState(0);

    return(
        <div>
            <p>Button clicked {count} times</p>
            <button onclick={()=>setCount(count+1)}>Click Me </button>
        </div>
    )
}
export default App