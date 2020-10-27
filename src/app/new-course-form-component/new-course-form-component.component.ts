import { FormArray, FormGroup, FormControl } from '@angular/forms';
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
