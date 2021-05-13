import './Button.css'

const Button = ({onStart}) => {
    return (
        <button onClick={onStart} type="button" className="btn btn-primary btn-sm btn-wh">
            Start
        </button>
    )
}

export default Button