
function OperationBtn(props) {
    return (
        <button 
            className={`operation-btn ${props.className}`}
            onClick={() => props.appendNumber(props.operation)}
        >
            {props.operation}
        </button>
    )
}

export default OperationBtn