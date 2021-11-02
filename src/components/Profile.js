import React from 'react'
import './Profile .css';
import {Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import propTypes from "prop-types";

const Profile = (props) => {
    const globalstyle ={ 
        backgroundColor:'black',
        fontFamily:'sansSerif',
        textAlign:'center',
    }
    return (
        <div className='profile'  style={globalstyle}   >
           <div class=' words word -1'>
               <span> { props.fullname}</span>
        </div>
        <p style={{color:"white",width:"62%",margin:"50px auto"}}> {props.bio} </p>
        <h3> {props.profession} </h3>
        <img style={{width:"200px",height:"200px",marge:"auto"}}src={props.children} alt='myphoto'></img>
        <br/>
        <Button style= {{marginTop:"80px" }} onClick={()=>{props.handleName(props.fullname)}}>this my alert</Button>{''}
     
    </div>
    )};
    Profile.defaultProps={
        fullname:'your fullname',
        bio:'your bio',
        profession:'your profession',
    };
    Profile.propTypes={
        fullname:propTypes.string,
        bio :propTypes.string,
        profession:propTypes.string,
    };


export default Profile