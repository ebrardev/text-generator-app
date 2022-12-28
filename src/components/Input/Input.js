import React from 'react'
import './input.css'
import { setParas, setFormat } from '../../redux/Text/textslice'
import { useDispatch,useSelector } from 'react-redux'



function Input() {
    const dispatch = useDispatch();
    const paras= useSelector((state) => state.text.paras);
    const format = useSelector((state)=> state.text.format);
  return (
    <div className='input-container'>
        <span className='p-span'>
            Paragraphs Number:
            <br/>
            <input type="number" className="input-span" value={paras} onChange={(e) => dispatch(setParas(Number(e.target.value)))}/>       
        </span>
   
        <span className='include-span'>
            Include Html ?
            <br/>
            <select className="select" value={format} onChange={(e) => dispatch(setFormat(e.target.value))}>
                <option value="yes">Yes</option>
                <option value="no">No</option>

            </select>
        </span>
      

        </div>
  )
}

export default Input