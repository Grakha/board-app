import PropTypes from 'prop-types'

import './Main.css'

const Main = ({children}) => {
    return (
        <div className="main">
            {children}
        </div>
    )
}

export default Main


Main.propTypes = {
    children: PropTypes.element
}