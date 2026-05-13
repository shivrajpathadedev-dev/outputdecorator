import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Istudent } from 'src/app/model/student';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {
editobj!:Istudent
studentsArr= [
  {
    id: '101',
    name: 'Shivraj',
    age: 22,
    course: 'Angular',
    city: 'Mumbai'
  },
  {
    id: "102",
    name: 'Rahul',
    age: 23,
    course: 'React',
    city: 'Pune'
  },
  {
    id: "103",
    name: 'Sneha',
    age: 21,
    course: 'Java',
    city: 'Nashik'
  },
  {
    id: "104",
    name: 'Amit',
    age: 24,
    course: 'Python',
    city: 'Nagpur'
  },
  {
    id: "105",
    name: 'Priya',
    age: 22,
    course: 'Node JS',
    city: 'Mumbai'
  }
];
  constructor(
        private _snackbarservice:SnackbarService
    
  ) { }

  ngOnInit(): void {
  }
  getNewstd(std:Istudent){
    this.studentsArr.push(std)
    this._snackbarservice.opensnack(`The Student ${std.name} is added successfully!!!`)
  }

  getRemoveId(removeid:string){
    let getIndex=this.studentsArr.findIndex(t=>t.id===removeid)
    let removestd=this.studentsArr.splice(getIndex,1)
    this._snackbarservice.opensnack(`The student ${removestd[0].name} is removed successfully!!!`)
  }

  getEditstd(editstd:Istudent){
      this.editobj=editstd
  }

  getUpdatestd(updateStd:Istudent){
    let getIndex=this.studentsArr.findIndex(t=>t.id===updateStd.id)
    this.studentsArr[getIndex]=updateStd
    this._snackbarservice.opensnack(`The student ${updateStd.name} is updated successfully!!!`)
  }
}
