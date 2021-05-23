import PropTypes from 'prop-types'
import './Board.css'


const TableBoard = ({ field, handleMouseEnter, showBoard }) => {
  
	const createBoard = () => {
		let rows = []

		for(let i = 0; i < field; i++) {
			let idRow = `row-${i+1}`
			let cell = []
			for(let j = 0; j < field; j++) {
				let idCell = `cell-${i+1}-${j+1}`
				cell.push(<td onMouseEnter={showBoard ? (e) => handleMouseEnter(e, idCell) : null} key={idCell}></td>)
			}
			rows.push(<tr key={idRow}>{cell}</tr>)
		}
		return rows
	}

  return (
    <table id="tableBoard" cellSpacing="0" style={{width : `${field * 54 + 1 + "px"}`}}>
      <tbody>
        {createBoard()}
      </tbody>
    </table>
  )
}

export default TableBoard

TableBoard.propTypes = {
	field: PropTypes.number.isRequired,
	handleMouseEnter: PropTypes.func.isRequired,
	showBoard: PropTypes.bool
}