import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-collect',
  templateUrl: './collect.component.html',
  styleUrls: ['./collect.component.css']
})
export class CollectComponent implements OnInit {
  myFormValues:any;
  myForm!: FormGroup;
  title = 'To-Do';
  test!:boolean;
  new_task_name: any = "";
  user_name: any = "";
  email: any = "";
  clicked: boolean = false;
  date: Date = new Date();
  isValid!: boolean;

  constructor() { 
  }

  ngOnInit(): void { 
    this.myForm = new FormGroup({
      task_name: new FormControl(''),
      user_name: new FormControl(''),
      new_task_name: new FormControl(''),
      email: new FormControl('', [Validators.required, Validators.email])
    });    
  }

  taskLength(): boolean {
    if(this.myForm.value.user_name != "" && this.myForm.value.task_name != ""  && this.myForm.value.email != ""){
        this.test = false;
    }else {
      this.test = true;
    }
    return this.test;
  }
  
  onSubmit() {
  console.log(this.myForm.value);
  }

  onClear(): void {
    this.myForm.reset(this.myForm.value.user_name, this.myForm.value.task_name);
    this.myForm.value.user_name = "";
    this.myForm.value.task_name = "";
    this.myForm.value.email == "";
    
  }

  onDelete(): void {
    this.myForm.value.user_name = "";
    this.myForm.value.task_name = "";
    this.myForm.value.email == "";
  }

  onUpdate(): void {
    this.myForm.value.task_name = this.myForm.value.new_task_name; 
  
  }
}
