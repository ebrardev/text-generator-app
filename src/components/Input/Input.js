import React from 'react'
import './input.css'

function Input() {
  return (
    <div className='input-container'>
        <span className='p-span'>
            Paragraphs Number:
            <br/>
            <input type="number" className='input-span' />
        </span>
   
        <span className='include-span'>
            Include Html ?
            <br/>
            <select className='select' >
                <option value="yes">Yes</option>
                <option value="no">No</option>

            </select>
        </span>
      

        </div>
  )
}

export default Input