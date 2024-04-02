import React from 'react';
import Image from "next/image";

export default function loading() {
  return (
    <div className='flex justify-center mt-16'>
        <Image src='spinner.svg' alt="loading..." width={250} height={250}/>
    </div>
  )
}
