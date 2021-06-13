import PropTypes from 'prop-types'

const Alert = ({row, col}) => {
  return (
    <div className={"alert alert-warning"}>
          {`row ${row} col ${col}`}
      </div>
  )
}

export default Alert


PropTypes.propTypes = {
    row: PropTypes.string.isRequired,
    col: PropTypes.string.isRequired
}