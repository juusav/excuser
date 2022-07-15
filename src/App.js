import { useEffect, useState } from "react";
import "./App.css";

function App() {

  const [collage, setCollage] = useState("")
  useEffect(() => {
    const url = "https://excuser.herokuapp.com/v1/excuse/college/";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCollage(json[0])
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Excuser 👀</h1>
      </header>
      <main>
        <p>Categorías:</p>
        <p>{collage.excuse}</p>
      </main>
    </div>
  );
}

export default App;
