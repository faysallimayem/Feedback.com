import React from 'react'
import Card from './shared/Card'
import { FaTimes , FaEdit } from 'react-icons/fa'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'

function Feedbackitem({item }) {
  const {deleteFeedback , editFeedback} = useContext(FeedbackContext)
    
    
    return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className="close"><FaTimes color='purple'/></button>
        <button onClick={()=> editFeedback(item)} className="edit"><FaEdit color='purple'></FaEdit></button>
        <div className='text-display'>{item.text}</div>
        

      
    </Card>
  )
}
Feedbackitem.propTypes = {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem
