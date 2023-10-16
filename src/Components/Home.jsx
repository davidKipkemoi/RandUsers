import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
import Paginator from './Paginator';

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
            
                <div  className='flex flex-wrap w-1/4 rounded-2xl bg-black'>
                <img
            src={people.picture.large}
            className=''
            />
            <p className=' text-white'>Gender : {people.gender}</p>
                </div>  
        )  
    }
    
  return (
  
<>
<div className='flex flex-row w-full bg-black justify-center '>
  <img
  className='h-28 w-40  mt-5 rounded-xl '
  src='https://images.unsplash.com/photo-1586348943529-beaae6c28db9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80'
  alt='description'
  />
    <h2 className="header-top">Thee A Team Group</h2>


</div>
<div className='justify-center flex flex-wrap gap-6 bg-white   mt-5 h-max  '>
        {users.map((people,index)=>(
            <ListPeople
            key={index}
            people={people}
            />
            ))
        }
        <Paginator/>
    </div>
</>
    
  )
}
