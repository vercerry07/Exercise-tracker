import React, { Component } from 'react'
import axios from 'axios'



class Createuser extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:''
        }
    }

    handleChange = (e)=>{
       this.setState({
           username:e.target.value
       })
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        
        
        let user = {
            username:this.state.username
        }
        axios.post('http://localhost:3200/userroute/add', user).then((res)=>{
            window.location = '/create'
        }) 
        .catch((err)=>{
           console.log(err)
        })  
        
        this.setState({
            username:''
        })
        //alert(`${this.state.username}`)
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>username</label>
                        <input type="text" value={this.state.username} onChange={this.handleChange} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Createuser
