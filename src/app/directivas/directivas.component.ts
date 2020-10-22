import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  //Si le quito los elementos al array se cumple la condición del else
  courses = [1];
  viewMode = "list";
  listOfCourses = [
    {id:1, name:"Matematicas"},
    {id:2, name:"Español"},
    {id:3, name:"Inglés"},
  ];
  listOfCourses2;
  @Input('isFavorite') isSelected : boolean;
  @Output('change') click = new EventEmitter();
  canSave:boolean;
  task={
    title:'Review applications',
    assignee:{
      name:'John Smith'
    },
    code:null
  }

  constructor() { }

  ngOnInit(): void {
  }

  addCourse(){
    this.listOfCourses.push({ id:4, name:"Sociales"});
  }

  deleteCourse(courseElement){
    let index = this.listOfCourses.indexOf(courseElement);
    this.listOfCourses.splice(index,1);
  }

  loadListCourses(){
    this.listOfCourses2 = [
      {id:1, name:"Matematicas"},
      {id:2, name:"Español"},
      {id:3, name:"Inglés"},
    ]
  }

  trackByCourses(index, course){
    return course ? course.id : undefined;
  }

  onClick(){
    this.isSelected=!this.isSelected;
    this.click.emit(<FavoriteChangedEvent>{ newValue : this.isSelected});
  }

  onClickStyleButton(){
    this.canSave = !this.canSave;
  }
}

export interface FavoriteChangedEvent{
  newValue : boolean;
}
