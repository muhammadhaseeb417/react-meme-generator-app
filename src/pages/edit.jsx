import { useSearchParams } from "react-router"

function EditPage() {
    const [params] = useSearchParams()
    const imgURL = params.get("url")
    return (
        <div >
            <h1>Edit Your Meme</h1>
            <img src={imgURL} alt="meme" style={{ height: "400px" }} />
            <button >Add Text</button>
        </div>
    )
}

export default EditPage