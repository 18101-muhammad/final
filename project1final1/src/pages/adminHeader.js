import React, { Component } from "react";
import {Link} from "react-router-dom";
import adminImage from '../assets/admin.png';


class AdminHeader extends Component{
    
    

    render(){
        return (
            <div style={{width:'100%'}}>
            <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:'#000000'}}>
            <Link to='/admin' className="navbar-brand" style={{color:'#CCA75C'}}>
            <img src={adminImage} width="30" height="30" alt=""/>
                Admin
            </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link to='/admin/userlist' className="nav-link" style={{color:'#CCA75C'}}>Customers </Link>
                </li>
                <li className="nav-item">
                    <Link to='/admin/addcar' className="nav-link" style={{color:'#CCA75C'}}>Add car</Link>
                </li>
                <li className="nav-item">
                    <Link to='/admin/booking'className="nav-link" style={{color:'#CCA75C'}}>Bookings</Link>
                </li>
                </ul>

            </div>
            </nav>
            </div>
        );
    }


} 

export default AdminHeader;