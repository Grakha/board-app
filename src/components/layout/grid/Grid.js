import PropTypes from 'prop-types'

import './Grid.css'


const Grid = ({children, grid}) => {
    return (
        <div className={`${grid}`}>
            {children}
        </div>
    )
}

export default Grid


Grid.propTypes = {
    children: PropTypes.node,
    grid: PropTypes.string
}