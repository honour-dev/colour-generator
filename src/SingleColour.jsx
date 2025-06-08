import React from 'react'
import {toast} from 'react-toastify'

const SingleColour = ({index, color}) => {
  const {hex, weight} = color;
  const saveToClipboard = async () => {
    if(navigator.clipboard){
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Colour copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy colour to clipboard')
      }
    } else{
      toast.error(`Can't copy this colour`)
    }
  }

  return (
    <article className={index > 10 ? 'color color-light' : 'color'} style={{background: `#${hex}`}} onClick={saveToClipboard}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColour
