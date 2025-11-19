import { motion } from "framer-motion";
import { useState } from "react";

function AddText({ x = 0, y = 0 }) {
    const [editMode, setEditMode] = useState(false)
    const [val, setVal] = useState("Double click to edit text")
    return (
        <motion.div
            drag
            dragMomentum={false} // makes dragging feel snappier
            initial={{ x, y }}
            style={{
                position: "absolute",
                cursor: "move",
            }}
        >
            {
                editMode ? <input onDoubleClick={() => setEditMode(false)} type="text" value={val} onChange={(value) => setVal(value.target.value)} /> :
                    <h2 onDoubleClick={() => setEditMode(true)}>{val}</h2>
            }

        </motion.div>
    );
}

export default AddText;
