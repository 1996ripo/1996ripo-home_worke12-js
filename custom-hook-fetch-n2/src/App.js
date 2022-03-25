import useFetch from "./hook/useFetch";
import "./App.css";

function App() {
  const { data, error, loading, handleFetch } = useFetch('https://dog.ceo/api/breeds/image/random');

  if (error) { <h2>{error.message}</h2> };

  return (
    <div className="App">
      <div>
        <button onClick={() => handleFetch('https://dog.ceo/api/breeds/image/random')}>NEW</button>
      </div>
      {loading ? <p>Loading...</p> : <img src={data ? data.message : '#'} />}
    </div>
  );
}



export default App;
