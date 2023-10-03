import Movie from "./Components/Movie";
import { movies } from "./movieDummy";


function App() {
  return (
    <div className="body">
    <div className="app-container">
      {
        movies.results.map((item) => {
          return (

            <Movie data={item} />
          )
        })
      }
    </div>
    </div>
  );
}

export default App;