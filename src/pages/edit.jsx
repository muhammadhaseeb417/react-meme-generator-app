import { createRef, useState } from "react"
import { useSearchParams } from "react-router"
import AddText from "../components/add-text"
import { exportComponentAsJPEG } from "react-component-export-image"
import { useToImage } from "@hcorta/react-to-image"
import "../App.css"

function EditPage() {
    const [params] = useSearchParams()
    const imgURL = params.get("url")
    const [count, setCount] = useState(0)
    const { ref, isLoading, getJpeg } = useToImage()

    return (
        <div>
            <h1>Edit Your Meme</h1>
            <div ref={ref} style={{ width: "500px", border: "2px solid grey", backgroundColor: "white" }}>
                <img src={imgURL} alt="meme" style={{ height: "400px" }} />
                {
                    Array(count).fill(0).map((e, i) => <AddText key={i} />)
                }
            </div>
            <button onClick={() => setCount(count + 1)}>Add Text</button>
            <button onClick={getJpeg}>Save</button>
            {isLoading && 'loading...'}
        </div>
    )
}

export default EditPage