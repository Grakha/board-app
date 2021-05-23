import PropTypes from 'prop-types'

import './Alert.css'

const Alert = ({row, col}) => {

    return (
        <div className="alert alert-warning">
           {`row ${row} col ${col}`}
        </div>
    )
}

export default Alert


PropTypes.propTypes = {
    row: PropTypes.string.isRequired,
    col: PropTypes.string.isRequired
}