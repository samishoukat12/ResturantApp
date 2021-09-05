import { Button, TextField } from '@material-ui/core'
import React from 'react'
import { useOwnersAddResturent } from './useOwnersAddResturent'

export default function OwnerAddResturent() {
    const[ctaResturentAdd,Title,Description,Discount,setTitle,setDiscount,setDescription]=useOwnersAddResturent()
    return (
        <div>
            <TextField type="name" value={Title} label="Title" onChange={(e)=>setTitle(e.target.value)}>Title</TextField>
            <TextField type="name" value={Description} label="Description" onChange={(e)=>setDescription(e.target.value)}>Discription</TextField>
            <TextField type="name" value={Discount} label="Dicount" onChange={(e)=>setDiscount(e.target.value)}>Discount</TextField>

<Button onClick={ctaResturentAdd}>Add Resturents</Button>


        </div>
    )
}
