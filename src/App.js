import axios from 'axios';
import { useEffect } from "react"

function App() {

  useEffect(() => {
    getMovies()
  })

  const getMovies = async () => {
    try {
      const res = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=98f4ba6b`
      );

      console.log(res)

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <p>SoftKraft</p>
    </div>
  );
}

export default App;
