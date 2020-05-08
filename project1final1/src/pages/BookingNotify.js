import React, { Component } from "react";
import axios from "axios";


class Booking extends Component{
    constructor(props){
        super(props);
        this.state={
            list:[],
        }

    }

    componentDidMount(){
       
        axios.get('https://mern-stackdev.herokuapp.com/carBooking').then(res => {
        console.log(res.data);

        this.setState({list:res.data});

       }).catch(err =>{

       })
    }

    render(){
        const listItem = this.state.list.map((bookingList,index) => 
                <tr key={index}>
                <td>{(bookingList.bookedBy)?bookingList.bookedBy.email:'email not exists'}</td>
                <td>{bookingList.cars.company}</td>
                <td>{bookingList.cars.model}</td>
                <td>{bookingList.cars.rent}</td>
                </tr>
        )
        return (
            <div style={{width:'96%',marginLeft:'2%',marginTop:'2%'}}>
                <h1 style={{color:'#CCA75C'}}>Booking Page</h1>
                <table className="table table-striped table-dark table-hover" style={{width:'95%'}}>
                    <thead>
                    <tr>
                        <th style={{color:'#CCA75C'}}>Booked By</th>
                        <th style={{color:'#CCA75C'}}>Car Company</th>
                        <th style={{color:'#CCA75C'}}>Car Model</th>
                        <th style={{color:'#CCA75C'}}>Car Rent</th>
                    </tr>
                    </thead>
                    <tbody>
                    {listItem}
                    </tbody>
                </table>
            </div>
        );
    }


} 

export default Booking;