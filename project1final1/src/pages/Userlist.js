import React, { Component } from "react";
import axios from "axios";


class UserList extends Component{

    constructor(props){
        super(props);
        this.state={
            list:[],
        }

    }

    componentDidMount(){
       
        axios.get('https://mern-stackdev.herokuapp.com/signup').then(res => {
        console.log(res.data);

        this.setState({list:res.data});

       }).catch(err =>{

       })
    }
    
    activate(customerId){
        
        axios.delete(`https://mern-stackdev.herokuapp.com/signup/${customerId}`)
        .then(result=>{
            if(result.data){
                alert("User Deleted Success");
                this.props.history.replace('/admin');
            }
            
            

        })
        .catch(err=>{
            console.log(err);
        });     
    }
    render(){
        
        const listItem = this.state.list.map((cst_list,index) => 
                 <tr key={index}>
                 <td>{cst_list.firstName}</td>
                 <td>{cst_list.lastName}</td>
                 <td>{cst_list.email}</td>
                 <td>{cst_list.address}</td>
                 <td><button type="button"className="btn btn-danger" onClick={this.activate.bind(this,cst_list._id)}>Delete</button></td>
                 </tr>
        )

        return(

            <div style={{width:'96%',marginLeft:'2%',marginTop:'2%'}}>

                <h1 style={{color:'#CCA75C'}}>Customer List</h1>
                
                <table className="table table-dark table-hover" style={{width:'95%'}}>
                <thead>
                <tr>
                    <th style={{color:'#CCA75C'}}>First Name</th>
                    <th style={{color:'#CCA75C'}}>Last Name</th>
                    <th style={{color:'#CCA75C'}}>Email</th>
                    <th style={{color:'#CCA75C'}}>Address</th>
                    <th style={{color:'#CCA75C'}}>Action</th>
                </tr>
                </thead>
                <tbody>
                {listItem}
                </tbody>
            </table>
                
            
            </div>
        )
    }


} 

export default UserList;