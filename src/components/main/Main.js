import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'


const useStyles = createUseStyles({
  main: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'grid',
    justifyContent: 'left',
    padding:'40px 0 0 40px'
  }
})

const Main = ({children}) => {
  const classes = useStyles()
    return (
        <div className={classes.main}>
            {children}
        </div>
    )
}

export default Main


Main.propTypes = {
    children: PropTypes.element
}