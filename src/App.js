import Movie from "./Components/Movie";
import { movies } from "./movieDummy";


function App() {
  return (
    <div className="app-container">
      {
        movies.results.map((item) => {
          return (

            <Movie data={item} />
          )
        })
      }
    </div>
  );
}

export default App;