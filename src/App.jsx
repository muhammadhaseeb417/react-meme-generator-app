import { useEffect, useState } from "react"
import MemeCard from "./components/meme-card"
import { getAllMemes } from "./api/memes"
import './App.css'

function App() {

  const [memes, setMemes] = useState([])

  useEffect(() => {
    getAllMemes().then(memes => setMemes(memes.data.memes))
  }, [])

  console.log(memes)

  return (
    <>
      {
        memes.map(meme => <MemeCard key={meme.id} src={meme.url} title={meme.name} />)
      }
    </>
  )
}

export default App
