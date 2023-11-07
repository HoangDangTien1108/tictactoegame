import React from 'react'

export default function Cell(props) {
  return (
    <div className={`cursor-pointer border border-gray-300 text-[100px] flex justify-center items-center ${props.className}`} onClick={props.onClick}>
      {props.value}
    </div>
  )
}
