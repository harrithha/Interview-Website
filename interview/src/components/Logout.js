import React, { useState, useEffect } from 'react';
import './CompanySignup.css';
import {Form} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import {useHistory} from 'react-router-dom';


const Logout = () => {
    const history = useHistory();

    useEffect(() => {
        fetch("http://localhost:5000/access-control-allow-origin/api/v1/users/login/", {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type" : "application/json"
            },
            credentials: "include"
        }).then((res) => {
            history.push('/companylogin', {replace: true});
            if(res.status !== 200){
                const error = new Error(res.error);
                throw error;
            }
        }).then((res) => {console.log(res)})
       .catch((err) => {
            console.log(err);
        });
    });


    return (
      
        <h1> Logout Page </h1>
    
    )
    }
export default Logout