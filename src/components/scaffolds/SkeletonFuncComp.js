import React ,{useState} from "react";

const FuncCompSkeleton = () =>{
    const[count , setCount] = useState(0);
    const increase = () => {
        setCount(count+1);
    }
    return (
        <div className="func-comp">
            <h6>Welcome</h6>
            <p>{count}</p>
            <button onClick={increase}>+ Add</button>
        </div>
    )
}

export default FuncCompSkeleton;

/*function App() {
    const [showUser, setShowUser] = useState(false)
    return (
      <div>
        {showUser && <User name="Brad" />}
        <button onClick={() => setShowUser(true)}>
          Show User
        </button>
        <button onClick={() => setShowUser(false)}>
          Hide User
        </button>
      </div>
    )
 }*/