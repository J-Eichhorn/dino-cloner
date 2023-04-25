import { useState, useEffect, createContext } from "react"

export const MyContext = createContext()

function MyProvider({ children }) {
 
    const [dinosaurs, setDinosaurs] = useState([])
  
    useEffect(() => {
      fetch("http://localhost:3000/Dinosaurs")
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          setDinosaurs(data);
          
        });
    }, []);

    const newDino = (dino) => {
        fetch("http://localhost:3000/Dinosaurs", {
            method: "POST",
            headers: {
                "content-type" : "Application/json",
            },
            body: JSON.stringify(dino)
        })
        .then((response) => response.json())
        .then((data) => {setDinosaurs([...dinosaurs, data])})
    }

    return (
        <MyContext.Provider
            value={({ dinosaurs: dinosaurs, newDino: newDino })}
        >
            {children}
        </MyContext.Provider>
    )
}

export default MyProvider

