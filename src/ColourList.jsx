import React from 'react'
import SingleColour from './SingleColour'
import {nanoid} from 'nanoid'

const ColourList = ({colours}) => {
  return (
    <section className='colors'>
      {colours.map((color, index)=>{
        return <SingleColour key={nanoid()} color={color} index={index}/>
      })}
    </section>
  )
}

export default ColourList
