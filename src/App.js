
import { useState } from 'react';
import './App.css';
import axios from 'axios';
import Gallery from './Gallery';
const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";


function App() {
  const [search, setSearch] = useState()
  const [data, setData] = useState([])

  const changeHandler = e => {
    setSearch(e.target.value)
  }

  const submitHandler = e =>{
    e.preventDefault()
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`).then(
      response => setData(response.data.photos.photo)
    )
  }

  return (
    <>
      <div>
        <center>
          <h1>Image Gallery Using React!</h1>
          <form onSubmit={submitHandler}>
          <input type='text' placeholder='Search Here....' value={search} onChange={changeHandler} />
          <input type='submit' name='search' />
          </form>
          <br></br>
        </center>
        {data.length >= 1 ? <Gallery photos={data} /> : <h2 style={{textAlign:'center'}}>You have to Search to get your desired data </h2>} 

      </div>
    </>
  );
}

export default App;
