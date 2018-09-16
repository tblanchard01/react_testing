import React from "react";
import {Form, FormControl, Button} from 'react-bootstrap' 
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies'
import Note from './Note'
const cookie_key = 'NOTES'

class App extends React.Component {
    constructor(){
        super(); 
        this.state = {
            text: '',
            notes: []
        } 
    }
    submit(){
      const {notes, text} = this.state 
      notes.push({ text })
      this.setState({notes })
    }
  render() { 
    return ( 
      <div>
      
        <h2> Note to self </h2>
        <Form inline > 
        
        <FormControl onChange = {(event) => this.setState({text:event.target.value})} />  
       {" "}
        <Button onClick = {() => this.submit()}> Submit </Button> 
        </Form> 
        {this.state.notes.map((note, index) => {
         return <Note key = {index} note = {note}/>
        }  )}
      </div>
    );
  }
}

 


export default App;
