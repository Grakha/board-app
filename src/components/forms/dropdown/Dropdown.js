import {useState, useRef, useEffect} from 'react'
import PropTypes from 'prop-types'

import './Dropdown.css'

const Dropdown = ({options, mode, switchMode}) => {

  const [toggleDropdown, setToggleDropdown] = useState(false)
  const ref = useRef()

  const onToggleDropdown = (e) => {
    e.preventDefault()
    setToggleDropdown(!toggleDropdown)
  }

  useEffect(() => {
    const onBodyEvent = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setToggleDropdown(false)
    }
    document.addEventListener('click', onBodyEvent)

    return () => {
      document.removeEventListener('click', onBodyEvent)
    }

  }, [])

  const renderModes = Object.entries(options).map(([key, value]) => {
    return (
          <li
            className="dropdown-item"
            onClick={(e) => switchMode(value.field, key)}
            key={key}>{ key.slice(0, -4) + " " + key.slice(-4) }</li>
      );
  })

  return (
    <div className="dropdown dropdown-wh">
      <a
        href={"!#"}
        className={`btn dropdown-toggle ${toggleDropdown ? 'show' : ''}`}
        onClick={onToggleDropdown} 
        ref={ref}>
          {mode === "" ? "Pick Mode" : mode}
      </a>
      <ul className={`dropdown-menu ${toggleDropdown ? 'show' : ''}`}>
        {renderModes}
      </ul>
    </div>
  )
}

export default Dropdown

Dropdown.propTypes = {
  options: PropTypes.objectOf(
    PropTypes.shape({
      field: PropTypes.number.isRequired
    })
  ).isRequired,
  mode: PropTypes.string.isRequired,
  switchMode: PropTypes.func.isRequired
}
