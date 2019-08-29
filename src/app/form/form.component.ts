import { Component, OnInit } from '@angular/core';
import { EmpolyeeService } from '../shared/empolyee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private service:EmpolyeeService) { }

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
}
