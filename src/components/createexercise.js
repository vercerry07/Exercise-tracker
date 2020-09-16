import React, { Component } from 'react'
import axios from 'axios'
 class Createexercise extends Component {
    
    
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             description:'',
             duration:0,
             users:[]
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3200/userroute/').then((res)=>{
              
              
              if(res.data.users.length > 0){
                console.log(res)
                this.setState({
                    users: res.data.users.map((user)=> user.username),
                    username: res.data.users.username
                })
              }
        })
        .catch((err)=>{
           console.log(err)
        })
    }
    handleUsename = (e)=>{
        this.setState({
            username: e.target.value
        })
    } 
    handleDecription = (e)=>{
       this.setState({
           description:e.target.value
       })
    }   
    handleDuration = (e)=>{
        this.setState({
            duration:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
          let exercisedata = {
              username:this.state.username,
              description:this.state.description,
              duration:this.state.duration
          }
          axios.post('http://localhost:3200/exercise/add',exercisedata).then((res)=>{
               window.location = "/"
          })
          .catch((err)=>{
             console.log(err)
          })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>select user</label>
                <select 
                         ref="userInput"
                         className="custom-select"
                         value={this.state.username}
                         onChange={this.handleUsename}
                         >
                    {
                        this.state.users.map((user)=>{
                        return <option key={user} value={user}>{user}</option>
                        })
                    }
                </select>
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <input type="text" value={this.state.description} onChange={this.handleDecription} className="form-control" />
                    </div>
                    <div className="form-group">
                        <label>Duration(in minutes)</label>
                        <input type="text" value={this.state.duration} onChange={this.handleDuration} className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default Createexercise
