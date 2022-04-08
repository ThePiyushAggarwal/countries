import { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search'
import { v4 } from 'uuid'
import Single from './components/Single'
import List from './components/List'

function App() {
  const [allCountries, setAllCountries] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [final, setFinal] = useState([])

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setAllCountries(response.data))
    console.log('fetched')
  }, [])

  const onSubmit = (e) => {
    e.preventDefault()
    try {
      let filtered = allCountries
        .filter((country) =>
          country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((country) => country)

      setFinal(filtered)
    } catch (err) {
      console.log(err)
    }

    setSearchTerm('')
  }

  const onChange = (e) => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <Search onChange={onChange} onSubmit={onSubmit} searchTerm={searchTerm} />
      {final.length === 0 ? (
        <p>No results.</p>
      ) : final.length === 1 ? (
        <Single final={final[0]} />
      ) : final.length > 10 ? (
        <p>Too many results, specify more.</p>
      ) : (
        final.map((country) => <List country={country} key={v4()} />)
      )}
    </>
  )
}

export default App
