import React from 'react'
import { useParams } from 'react-router-dom'

function PlayVedio() {
    const youtubeid=useParams().id
    console.log(youtubeid,"id")
  return (
    <div>
        <iframe src={`https://www.youtube.com/embed/${youtubeid}`} width="100%" height="500px" allowFullScreen/>
    </div>
  )
}

export default PlayVedio