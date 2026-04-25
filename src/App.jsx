import { useState } from "react"
import hogsData from "./porkers_data"
import HogList from "./components/HogList"
import HogForm from "./components/HogForm"
import HogControls from "./components/HogControls"

function App() {
  const [hogs, setHogs] = useState(hogsData)
  const [showGreasedOnly, setShowGreasedOnly] = useState(false)
  const [sortBy, setSortBy] = useState("")
  const [hiddenHogs, setHiddenHogs] = useState([])

  const handleHideHog = (name) => {
    setHiddenHogs((prev) => [...prev, name])
  }

 const handleAddHog = (newHog) => {
  setHogs((prev) => [newHog, ...prev])
}

  const visibleHogs = hogs
    .filter((hog) => !hiddenHogs.includes(hog.name))
    .filter((hog) => (showGreasedOnly ? hog.greased : true))
    .sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name)
      if (sortBy === "weight") return a.weight - b.weight
      return 0
    })

  return (
    <div>
      <HogControls
        showGreasedOnly={showGreasedOnly}
        setShowGreasedOnly={setShowGreasedOnly}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <HogForm onAddHog={handleAddHog} />

      <HogList hogs={visibleHogs} onHide={handleHideHog} />
    </div>
  )
}

export default App