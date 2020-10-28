import { FormArray, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form-component',
  templateUrl: './new-course-form-component.component.html',
  styleUrls: ['./new-course-form-component.component.scss']
})

export class NewCourseFormComponentComponent {
  form = new FormGroup({
    topics : new FormArray([])
  });

  //Ejemplo de como se ve el formbuilder en estructura de form components
  // form = new FormGroup({
  //   name : new FormControl('', Validators.required),
  //   contact : new FormGroup({
  //     email : new FormControl(),
  //     phone : new FormControl()
  //   }),
  //   topics : new FormArray([])
  // });

  constructor(fb : FormBuilder){
    this.form = fb.group({
      name: ['', Validators.required],
      contact : fb.group({
        email: [],
        phone: []
      }),
      topics : fb.array([])
    });
  }

  addTopic(topic : HTMLInputElement){
    this.topics.controls.push(new FormControl(topic.value));
    topic.value = "";
  }

  removeTopic(topic : FormControl){
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics(){
    return this.form.get('topics') as FormArray;
  }
}
