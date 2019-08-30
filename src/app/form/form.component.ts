import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../shared/empolyee.service';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:EmpolyeeService, private db:AngularFirestore) { 
    console.log(this.service.data);
  }

  ngOnInit() {
    this.resetForm();
  }
 resetForm(form?:NgForm)
 {
   if(form!=null){
     form.resetForm();
   }
   this.service.data ={
     id:null,
     fullName:'',
     position:'',
     empCode:'',
     mobile:'',
   }
 }

   onSubmit(form:NgForm){
     let data= form.value;
     console.log(data);
     this.db.collection('employee').add(data);
     this.resetForm(form);
   }
}
