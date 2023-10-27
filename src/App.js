import axios from 'axios';
import './App.css';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState('')
  const [meanings, setMeanings] = useState([])
  const [category, setCategory] = useState('English')


  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      setMeanings(data.data)
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    dictionaryApi();
  }, [word, category, dictionaryApi])

  return (
    <div className="App" style={{ height: '100vh', backgroundColor: "#282c34", color: 'white' }}>
      <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} />
        {meanings && <Definitions word={word} meanings={meanings} category={category} />}
      </Container>
    </div>
  );
}

export default App;
