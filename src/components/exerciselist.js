import React, { Component } from 'react'
import {Link} from'react-router-dom'
import axios from 'axios'


let Exercise = props => (
    <tr>
        <td>{props.exercise.username}</td>
        <td>{props.exercise.description}</td>
        <td>{props.exercise.duration}</td>
        <td>
         <a href="#" onClick={()=> {props.deleteexercise(props.exercise._id)} }>delete</a>
        </td>
    </tr>

)
export class Exerciselist extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
           exercises:[]           
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3200/exercise/').then((res)=>{
            if(res.data.excercise.length > 0){
                this.setState({
                    exercises: res.data.excercise
                })
                
                //console.log(res)    
            }
        })
        .catch((err)=>{
           console.log(err)
        })
    }
    handleDelete = (id)=>{
       axios.delete('http://localhost:3200/exercise/'+id).then((res)=>{
       console.log(res.data.excercise)
       this.setState({
           exercises: this.state.exercises.filter(el => el._id !== id)
       })    
    })  
    }   
    exerciseList = ()=>{
        return this.state.exercises.map(currentone => {
            return <Exercise exercise={currentone} deleteexercise={this.handleDelete} key={currentone._id} />
        })
    } 

    render() {
        return (
            <div>
                <h2>Logged exercises</h2>
                <table className="table">
                    <thead>
                        <tr>
                          <th>username</th>
                          <th>Decription</th>
                          <th>Duration</th>
                          <th>Actions</th>  
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Exerciselist
