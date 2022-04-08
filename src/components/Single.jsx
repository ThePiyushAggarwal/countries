import { v4 } from 'uuid'
import Weather from './Weather'

function Single({ final }) {
  const lat = final.capitalInfo.latlng[0]
  const lon = final.capitalInfo.latlng[1]

  return (
    <div>
      <h1>{final.name.common}</h1>
      <br />
      Capital: {final.capital[0]}
      <br />
      Area: {final.area}
      <br />
      <h3>Languages: </h3>
      {Object.values(final.languages).map((language) => (
        <li key={v4()}>{language}</li>
      ))}
      <br />
      <img src={final.flags.png} width="150px" height="150px" />
      <Weather lat={lat} lon={lon} />
    </div>
  )
}

export default Single
