import {useEffect, useState} from 'react';
import Select from 'react-select'
import './App.css';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const countriesData = await fetchCountries()
      setCountries(countriesData)
    }
      getData()
  }, [])

  const fetchCountries = async () => {
    const res = await fetch('https://vilmisv.github.io/jsonApiCountries/myData.json');
    const data = await res.json()
    console.log(data)
    return data
  }

  const options = countries.map((country) =>({
    "value": country.country,
    "label": country.country
  }))

  return (
    <div className="App">
      <Select options={options}/>
    </div>
  );
}

export default App;
