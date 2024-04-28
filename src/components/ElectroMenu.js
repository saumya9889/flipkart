import React from 'react'


const data= [
  {
    type: 'action',
    key: 'diehard',
    name: 'Die Hard',
    
  },
  {
    type: 'action',
    key: 'ong-bak',
    name: 'OngBak'
  },
  {
    type: 'action',
    key: 'johnwick',
    name: 'JohnWick'
  },
  {
    type: 'comedy',
    key: 'friday',
    name: 'Friday'
  },
  {
    type: 'comedy',
    key: 'old-school',
    name: 'OldSchool'
  },
  {
    type: 'comedy',
    key: 'this-is-the-end',
    name: 'ThisistheEnd',
  }
]
export const ElectroMenu = () => {
  return (
    <>
    <div >
                <span text="Home" />
                <span text="Courses">
                    <span text="DSA Self Paced" />
                    <span text="GATE 2023" />
                    <span 
                        text="Full Stack Development" />
                </span>
                <span text="Practice" ></span> 
            </div>
        
    </>
  )
}

