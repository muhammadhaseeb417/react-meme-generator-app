import { useState } from "react"
import { useSearchParams } from "react-router"
import AddText from "../components/add-text"

function EditPage() {
    const [params] = useSearchParams()
    const imgURL = params.get("url")
    const [count, setCount] = useState(0)

    return (
        <div >
            <div>
                <h1>Edit Your Meme</h1>
                <img src={imgURL} alt="meme" style={{ height: "400px" }} />
                {
                    Array(count).fill(0).map(e => <AddText />)
                }
            </div>
            <button onClick={() => setCount(count + 1)}>Add Text</button>
        </div>
    )
}

export default EditPage