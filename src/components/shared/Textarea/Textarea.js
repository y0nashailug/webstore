
const Textarea = ({ onKeyDown, onInput, onRef }) => {
    return (
        <textarea
            onInput={(e) => onInput(e.target.value) }
            rows="1"
            className="textarea"
            onKeyDown={onKeyDown}
        />
    )
}

export default Textarea