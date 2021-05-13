import './Grid.css'


const Grid = ({children, grid}) => {
    return (
        <div className={`${grid}`}>
            {children}
        </div>
    )
}

export default Grid
