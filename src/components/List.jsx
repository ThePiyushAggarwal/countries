import Single from './Single'
import { useState } from 'react'

function List({ country }) {
  const [show, setShow] = useState(false)
  return (
    <>
      <li>
        {country.name.common}
        <button onClick={() => setShow(!show)}>show it bitch</button>
      </li>
      {show && <Single final={country} />}
    </>
  )
}

export default List
