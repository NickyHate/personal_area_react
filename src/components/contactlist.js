import React, { useState, useEffect } from 'react'
import firebaseDb from '../index'

export default function ContactList() {
var [contactObject, setContactObject] = useState(0);

useEffect(() => {
    firebaseDb.child('contacts').on('value', snapshot => {
       if( snapshot.val() !== null ) {
           setContactObject({
               ...snapshot.val(),
           })
       }
    })
}, [])

    return (
       <table className="table table-borderless table-stripped">
           <thead className="thead-lite">
               <tr>
                   <th>Full name</th>
                   <th>Mobile</th>
                   <th>Email</th>
                   <th>Actions</th>
               </tr>
           </thead>
           <tbody>
               {
                   Object.keys(contactObject).map(id => {
                       return (
                           <tr>
                               <td>{contactObject[id].fullName}</td>
                               <td>{contactObject[id].mobile}</td>
                               <td>{contactObject[id].email}</td>
                               <td></td>
                           </tr>
                       )
                   })
               }
           </tbody>
       </table>
    )
}
