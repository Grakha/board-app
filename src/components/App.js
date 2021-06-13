/*
Ниже направляю более развернутое описание нашего тех специалиста:

показать какие инструменты и подходы он использует в разработке 
но for процендурный подход а forEach более декларативный.
Описывать for для того чтобы пройтись по массиву в данному случае изыточно. Этот пункт тоже не является ключевым, лишь отображает выбор инструментов для решения задачи
const filteredSquares = posSquares.filter(square => square.row !== row && square.col !== col); setPosSquares(filteredSquares);
А так нам приходится найти индекс, потом создать новый массив и выкинуть элемент по этому индексу. Так можно делать, но я не вижу почему в данном случае findIndex подходит лучше, если эти 2 действия можно сделать одним действием
В замечаниях еще было указано что была напрямую работа с DOM, но эта зона ответственности React и считается плохой практикой.
@React is unaware of changes made to the DOM outside of React. It determines updates based on its own internal representation, and if the same DOM nodes are manipulated by another library, React gets confused and has no way to recover.@ - https://reactjs.org/docs/integrating-with-other-libraries.html
Здесь речь идет о том как можно выйти из ситуации когда все же надо вручную манипулировать DOM вне реакта, но это не случай, который был в тестовом. И это потенциальное место возникновения багов с рендером

Описание каждого стиля через HOC обертку выглядит избыточным.
*/

import React, {useState, useEffect} from 'react'
import api from '../apis/mode'


import Main from './main/Main'

import Title from './content/title/Title'
import Button from './forms/button/Button'
import Alert from './forms/alert/Alert'
import Dropdown from './forms/dropdown/Dropdown'

import Board from './board/Board'

import '../assets/css/style.css'

const App = () => {
  const [options, setOptions] = useState({})
	const [field, setField] = useState(0)
	const [mode, setMode] = useState('')
	const [showBoard, setShowBoard] = useState(false)

	const [posSquares, setPosSquares] = useState([])



  useEffect(() => {
    api.get('/')
        .then(res => {
          setOptions({...res.data})
        })
        .catch(error => console.error(`Error: ${error}`))
  }, [])

	const onStart = () => {
		setShowBoard(true)
	}

	useEffect(() => {
		
		const refreshBoard = () => {

			let board = document.getElementById('tableBoard')
			let activeCell = board.querySelectorAll('tr td.active')

			activeCell.forEach(elem => elem.classList.remove('active'))
		}
		refreshBoard()
	}, [mode])

 
  const switchMode = (val, key) => {
    let textMode = key.slice(0, -4) + " " + key.slice(-4)
		setMode(textMode)
		setField(val)
  }

	const addAlert = (row, col) => {
		setPosSquares(prev => {
			return [...prev, {row: row, col: col}]
		})
	}

	const removeAlert = (row, col) => {
	// 	let index = posSquares.findIndex(item => item.row === row && item.col === col)
	// 	setPosSquares([
	// 		...posSquares.slice(0, index),
	// 		...posSquares.slice(index + 1)
	// 	])
    const filteredSquares = posSquares.filter(square => square.row !== row && square.col !== col);
    console.log("object")
    setPosSquares(filteredSquares);
	}
	
	const handleMouseEnter = (e, idCell) => {
		let rowColl = idCell.split('-')
		let row = rowColl[1]
		let col = rowColl[2]
		let target = e.target

		if(target.classList.contains("active")) {
			target.className = ''
			removeAlert(row, col)
		} else {
			target.className += 'active'
			addAlert(row, col)
		}
	}

	return (
		<Main>
      <div className="grid grid_row row_gap">
        <div className="grid grid_col col_gap35">
          <div className="grid col_gap row_gap30 content_start">
            <div className="grid grid_col_wd col_gap">
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
						</div>
						<div>
							<Board
								field={field}
								showBoard={showBoard}
								handleMouseEnter={handleMouseEnter} />
						</div>
					</div>

          <div className="grid col_gap row_gap content_start">
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
					</div>
				</div>
			</div>
		</Main>
	)
}

export default App