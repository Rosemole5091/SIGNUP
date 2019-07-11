import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'signupform',
  templateUrl: './signupform.component.html',
  styleUrls: ['./signupform.component.css']
})
export class SignupformComponent {
  fname;
  lname;
  address;
  contact;
  email;
  userlist;

  constructor() {
   this.userlist = [{ fname: 'Anil', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anilgmail.com'},
    { fname: 'minu', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'meera', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'neethu', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'ajay', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'veena', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'Anil', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'manu', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'Anil', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' },
    { fname: 'sunil', lname: 'Arun', address:'thrissur', contact: '3354353454', email: 'anil@gmail.com' }
    ]; 
    }

 addUser(){
  this.userlist.push({ fname: this.fname, lname: this.lname,address:this.address,contact:this.contact,email:this.email});
  console.log(this.userlist);
}


//listusers()
//{
  //console.log(this.fname,this.lname,this.address,this.contact,this.email);

//}
}



