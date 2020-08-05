import React from 'react'
import ContactRegister from './contactregister'
import ContactList from './contactlist'
import firebaseDb from "../index";

export default function ContactForm() {
    const addOrEdit = obj => {
        firebaseDb.child('contacts').push(obj, err => {
            if(err){
                console.log(err)
            }
        })
    }
    return (
        <>
        <div className="jumbotron jumbotron-fluid text-center">
            <div className="container">
                <h1 className="display-4">Contact Register</h1>
            </div>            
        </div>
        <div className="row">
            <div className="col-md-5">
                <ContactRegister addOrEdit={addOrEdit}/>
            </div>
            <div className="col-md-7">
                <ContactList/>
            </div>
        </div>
        </>
    )
}
