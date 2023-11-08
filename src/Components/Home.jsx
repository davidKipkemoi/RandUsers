import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
export default function Home() {
    const [users,setUser]= useState([]);
    
    useEffect(()=>{
        const handleFetch = async()=>{
            try {
              const res = await axios.get("https://randomuser.me/api/?results=12")
              const total = res.data.results
              setUser(total)
              console.log(res.data.results)
            } catch (error) {
              console.error('Error fetching random user:', error);
            }
          }
          handleFetch()
    },[])   
    const ListPeople = ({people})=>{
        return(
         <div  className='flex w-1/4 rounded-2xl bg-white'>   
            <div className='flex flex-col  md:flex-row'>
              <img
                  src={people.picture.large}
                  className=''
               />
               <div className='flex flex-col'>
                  <p className=' text-white'>Gender : {people.gender}</p>
                    <p className=' text-white'>Country : {people.location.country}</p>
                    <p className=' text-white'>City : {people.location.city}</p>
                </div>
                      </div>
              </div>

        )  
    }
    
  return (
  
<>
<div className='flex flex-row w-full '>
  <img
  className='h-28 w-40  mt-5 rounded-xl '
  src='https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80'
  alt='description'
  />
    <div>
      <div className="relative text-gray-600">
    <input />
    <button type="submit" className="absolute right-0 top-0 mt-3 mr-4">
        <i className="fas fa-search"></i>
    </button>
</div>
    </div>
</div>
    

<div className='justify-center flex flex-wrap gap-6 mt-5 h-max  '>
        {users.map((people,index)=>(
            <ListPeople
            key={index}
            people={people}
            />
            ))
        }
    </div>
</>
    
  )
}
