import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function Header({text,bgColor,textColor}) {

  return (
    <header style={{backgroundColor:bgColor , color: textColor}}>
        <div className='container'>
            <h2>
            <Link to='/'>{text}</Link>
            </h2>

        </div>
      
    </header>
  )
}
Header.defaultProps = {
    text :'Feedback UI',
    bgColor:'rgba(0,0,0,0,4)',
    textColor:'#ff6a95',
}

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}

export default Header
