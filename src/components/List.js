import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import img from  "../Public/imgs/bitcoin.svg";

const people = [
  { id: 1, name: 'BTC Bitcoin', unavailable: false },
  { id: 2, name: 'ETH Ethereum', unavailable: false },
  { id: 3, name: 'TRX Tron', unavailable: false }
]

function MyListbox() {
  return (
   <div>
      <span className='text-gray-500 text-sm font-semibold'>Coin</span>
      <select className='w-full mt-2 border-2 mt-1 w-full mb-1 text-gray-600 font-medium focus:outline-none hover:cursor-pointer border-gray-200 rounded-lg'>
        {
            people.map(person => (
              <option
              className='rounded-lg p-2 text-gray-400 font-medium hover:bg-gray-300'
              key={person.id}
              value={person}
              disabled={person.unavailable}
              >
                 {person.name}
              </option>
            ))
          }
    </select>
   </div>
  )
}

export default MyListbox