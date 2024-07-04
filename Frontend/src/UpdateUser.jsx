import React from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import { useEffect,useState } from 'react'
import axios from 'axios'

function UpdateUser() {
const {id}=useParams()
const[name,setName]=useState()
const[email,setEmail]=useState()
const[age,setAge ]=useState()
const navigate=useNavigate()


useEffect(()=>{
  axios.get(`http://localhost:3001/getUser/${id}`)
  .then(result=>{console.log(result)
    setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
  })
  .catch(err=>console.log(err))
},[]);

const Update=(e)=>{
  e.preventDefault();
  axios.put('http://localhost:3001/updateUser/'+id,{name,email,age})
  .then(result=>console.log(result.data))
  .catch(err=>console.log(err))
  navigate('/')
}
  return (
    <>
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    
    <form className="w-50 h-60 bg-white rounded p-3" onSubmit={Update}>
    <div className='fs-38 mb-3'><h3>Update User</h3></div>
      <div className="form-group mb-4">
        <label htmlFor="Name">Name</label>
        <input type="text" className="form-control" placeholder="Enter name" id="Name" value={name}  onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className="form-group mb-4">
        <label htmlFor="Email1">Email</label>
        <input type="email" className="form-control" placeholder="Enter email" id="Email1" value={email} onChange={(e)=>setEmail(e.target.value)} />
      </div>
      <div className="form-group mb-4">
        <label htmlFor="Age">Age</label>
        <input type="text" className="form-control" placeholder="Enter age" id="Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
      </div>
      <button type="submit" className="btn btn-success mt-3">Submit</button>
    </form>
  </div>
  </>
  )
}

export default UpdateUser
