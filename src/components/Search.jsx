function Search({ searchTerm, onSubmit, onChange }) {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={searchTerm} autoFocus />
        <button type="submit">Search</button>
      </form>
    </>
  )
}

export default Search
