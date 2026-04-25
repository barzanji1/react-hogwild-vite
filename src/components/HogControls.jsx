function HogControls({ showGreasedOnly, setShowGreasedOnly, sortBy, setSortBy }) {
  return (
    <div>
     <label htmlFor="greased-filter">Greased Pigs Only?</label>
<input
  id="greased-filter"
  type="checkbox"
  checked={showGreasedOnly}
  onChange={(e) => setShowGreasedOnly(e.target.checked)}
/>

      <label htmlFor="sort">Sort by:</label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
      >
        <option value="">None</option>
        <option value="name">Name</option>
        <option value="weight">Weight</option>
      </select>
    </div>
  )
}

export default HogControls