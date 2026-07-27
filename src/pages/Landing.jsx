import React from 'react';
import { useState ,useEffect ,useRef } from 'react';


export default function Hero() {
    const [hover, setHover] = useState(true);
    const [count, setCount] = useState(0);
    const user = 'Window';
    const readCount = useRef(0);
    let [countM, setCountMe] = useState(0);
    const [log, setLog] = useState(false);
    const [name, setName] = useState("");
    const [name2, setName2] = useState("");
    const [taskInput, setTaskInput] = useState("");

    const [tasks, setTask] = useState([]);


    const handleChange = (e) =>
    {
        console.log(e.target.value);
    }
    
    const hello = ( )=>
    {
        alert("hello from nithin");
    }

    const clickMe= () => {
        setCountMe(countM + 1);
    }
 
    const handleSubmit = (e) =>
    {
        e.preventDefault();

        console.log(name);
    }
    const handleSubmit2 = (e) =>
    {
        console.log(name);
    }
const handleSubmit3 = (e) => {
    e.preventDefault();

    setTask(prev => [...prev, taskInput]);

    setTaskInput("");
};
    
    


    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1);
         
        }, 10);
        
    });


    return (

        <div>
            <center>
            <button
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={hover ? styles.nithin : styles.himagiri}>
                {hover ? 'Hovering' : 'Not Hovering'}
            </button>

            <h1>Counted use useEffect : {count}</h1>
            
            
            <div>
                <h1> hello {user}</h1>
                <Component2 user={user} />
            <p>this is useContext </p>
            </div>

            <div><center>
                <button onClick={hello} >Hello slert</button>
                </center>
            </div>
            <div >
                <button onClick={clickMe} >Click counter : {countM} </button>
                </div>
                
                <div>
                    <input onChange={handleChange}  placeholder="This will log every thing you type"/>
                    
                 
                </div>

                <div>
                    <p>Conditional Rendering </p>
                    <button onClick={() =>  setLog(true) }> {log ? "Thanks for clicking" : " Click here "} </button>
                </div>

                <div>
                    <form onSubmit={handleSubmit}>
                    <input value={name} onChange={(e) => setName(e.target.value)} placeholder="submit form without refresh" />
                        <button type="submit">Submit</button>
                        </form>
                </div>

                
                <div>
                    <form onSubmit= {handleSubmit2}>
                    <input value={name2} onChange={(e) => setName2(e.target.value)} placeholder="submit form with refresh" />
                        <button type="submit">Submit</button>
                        </form>
                </div>
                   <div>
                      <form onSubmit={handleSubmit3}>
                          <input
                           value={taskInput}
                           onChange={(e) => setTaskInput(e.target.value)}
                           placeholder="This will note the task down"
                         />

                         <button type="submit">
                          Add Task
                       </button>
                        </  form>
                          </div>
                  < div>
                          <h2>Submitted Tasks</h2>

                          {tasks.map((task, index) => (
                              <p key={index}>{task}</p>
                             ))}
                    </div>
            </center>


        </div>
       
    );
}

function Component2({props}) {
    return (
        <div>
            <h1>this is Component 2</h1>
            <Component3 user={props} />
        </div>
    );
} 
function Component3({ props }) {
    return (
        <div>
            <h1>Component 3</h1>
            <h2>Welcome again {props} </h2>
</div>
    );
}


const styles = {
    nithin: {
        backgroundColor: 'black',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      
    },
    himagiri: {
         backgroundColor: 'gray',
        color: 'red',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    button: {
       marginTop : "100px",
   }
}

