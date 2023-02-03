import { useState } from 'react'
import Player from "./components/Player"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Player/>
    </div>
  )
}

export default App
