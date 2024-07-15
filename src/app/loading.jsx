import Image from 'next/image'
import React from 'react'

export default function Loading() {
  return (
    <div className='flex justify-center mt-16'>
        <img src='spinner.svg' alt='loading...' ></img>
    </div>
  )
}
