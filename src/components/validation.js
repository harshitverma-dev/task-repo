import React from 'react'

const Validation = (val) => {
    const errors = {};
    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // fullName, jobTitle, userRole, email, password, confirmPassword
    if(!val.fullName){
        errors.fullName = "name is required !" 
    }

    if(!val.jobTitle){
        errors.jobTitle = "job title is required !"
    }

    if(!val.userRole){
        errors.userRole = "user role is required !"
    }

    if(!val.email || !regEmail.test(val.email)){
        errors.email = "enter vaild email !"
    }
    
    if(!val.password){
        errors.password = "password is required !"
    }

    if(!val.confirmPassword){
        errors.confirmPassword = "confirm password is required !"
    }
    return errors;
}

export default Validation;
