import React, { useEffect } from 'react'
import './style.css'
import { fetchText } from '../../redux/Text/textslice'
import { useDispatch,useSelector } from 'react-redux'


function Textcontent() {
  const dispatch = useDispatch();

  const paras = useSelector((state) => state.text.paras);
  const format = useSelector((state) => state.text.format);

  useEffect(() => {
    dispatch(fetchText({paras,format}));
  }, [paras,format,dispatch])

  const text = useSelector((state) => state.text.items);
  return (
    <div className='text-content'>{text}</div>
  )
}

export default Textcontent