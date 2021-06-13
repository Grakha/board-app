import { createUseStyles } from 'react-jss'
import PropTypes from 'prop-types'

const useStyles = createUseStyles({
  btnStyle: {
    width: 85,
    height: 35,
    textTransform: 'uppercase',
    letterSpacing: 1,
    fontWeight: 600
  }
})

const Button = ({onStart}) => {
  const classes = useStyles()
  return (
    <button onClick={onStart} type="button" className={"btn btn-primary btn-sm " + classes.btnStyle}>
          Start
      </button>
  )
}

export default Button

Button.propTypes = {
    onStart: PropTypes.func
}