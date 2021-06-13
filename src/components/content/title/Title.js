import { createUseStyles } from "react-jss"

const useStyles = createUseStyles({
  title: {
    fontWeight: 700,
    fontSize: 30,
    letterSpacing: 1
  }
})

const Title = () => {
  const classes = useStyles()

    return (
      <div className={classes.title}>
           Hover squares
        </div>
    )
}

export default Title