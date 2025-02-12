import React from 'react'
import CommentActions from './CommentActions'

const CommentCard = (props) => {
  
  return (
    <div className='comment-card'>
      
      <div>
        {props.comment.content}
        <CommentActions {...props} />
      </div>
    </div>
    
  )
}

export default CommentCard