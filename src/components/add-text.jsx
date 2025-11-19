import { motion } from "framer-motion";

function AddText({ x = 0, y = 0 }) {
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
            <h2>Double click to edit text</h2>
        </motion.div>
    );
}

export default AddText;
