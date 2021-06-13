import React from 'react'
import PropTypes from 'prop-types'
import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  tableBoard: {
    tableLayout: "fixed",
    border: "1px solid #000000",
    borderWidth: "0 0 1px 1px",

    '& td': {
      display: 'inline-block',
      width: 54,
      height: 54,
      border: '1px solid #000000',
      borderWidth: '1px 1px 0 0',

        '&.active': {
          backgroundColor: '#007bff',
        },
    }
  }
})

const TableBoard = ({ field, handleMouseEnter, showBoard }) => {
  const classes = useStyles()
  
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
    <table id="tableBoard" class={classes.tableBoard} cellSpacing="0" style={{width : `${field * 54 + 1 + "px"}`}}>
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