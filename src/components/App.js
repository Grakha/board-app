import {useState, useEffect} from 'react'
import api from '../apis/mode'


import Main from './main/Main'

import Title from './content/title/Title'
import Button from './forms/button/Button'
import Alert from './forms/alert/Alert'
import Dropdown from './forms/dropdown/Dropdown'

import Grid from './layout/grid/Grid'
import Board from './board/Board'

import '../assets/css/style.css'

const App = () => {
  const [options, setOptions] = useState([])
	const [field, setField] = useState(0)
	const [mode, setMode] = useState('')
	const [showBoard, setShowBoard] = useState(false)

	const [posSquares, sePosSquares] = useState([])

  useEffect(() => {
    api.get('/')
        .then(res => {
          setOptions(res.data)
        })
        .catch(error => console.error(`Error: ${error}`))
  }, [])

	const onStart = () => {
		setShowBoard(true)
	}

	const refreshBoard = () => {
		let board = document.getElementById('tableBoard')
		let activeCell = board.querySelectorAll('tr td.active')
		console.log(activeCell)
		for(let i = 0; i < activeCell.length; i++) {
			activeCell[i].classList.remove('active')
		}
		posSquares.length = 0
	}
 
  const switchMode = (val, key) => {
    let textMode = key.slice(0, -4) + " " + key.slice(-4)
		setMode(textMode)
		setField(val)
		refreshBoard()
  }

	const addAlert = (row, col) => {
		sePosSquares(prevElem => {
			return [...prevElem, {row: row, col: col}]
		})
	}
	
	const handleMouseEnter = (e, idCell) => {
		let rowColl = idCell.split('-')
		let row = rowColl[1]
		let col = rowColl[2]
		let target = e.target

		if(target.classList.contains("active")) {
			target.className = ''
		} else {
			target.className += 'active'
			addAlert(row, col)
		}
	}

	return (
		<Main>
			<Grid grid="grid grid_row row_gap">
				<Grid grid="grid grid_col col_gap35">
					<Grid grid="grid col_gap row_gap30 content_start">
						<Grid grid="grid grid_col_wd col_gap">
							<div>
								<Dropdown 
									options={options}
									mode={mode}
									switchMode={switchMode} />
							</div>
							<div>
								<Button 
								onStart={onStart} />
							</div>
						</Grid>
						<div>
							<Board
								field={field}
								showBoard={showBoard}
								handleMouseEnter={handleMouseEnter} />
						</div>
					</Grid>

					<Grid grid="grid col_gap row_gap content_start">
						<div>
							<Title />
						</div>
						<div>
								{ posSquares.map((pos, index) => {
										return(
											<Alert
												key={index}
												row={pos.row}
												col={pos.col} />);
									})
								}
						</div>
					</Grid>
				</Grid>
			</Grid>
		</Main>
	)
}

export default App