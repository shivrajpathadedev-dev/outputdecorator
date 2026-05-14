import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Istudent } from 'src/app/model/student';
import { SnackbarService } from 'src/app/service/snackbar.service';
import { TodoService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit, OnChanges {
  isInEditMode: boolean = false

  @ViewChild('name') name!: ElementRef
  @ViewChild('course') course!: ElementRef
  @ViewChild('city') city!: ElementRef
  @ViewChild('age') age!: ElementRef
  @Input() getobj!: Istudent
  @Output() emitNewStudent: EventEmitter<Istudent> = new EventEmitter<Istudent>()
  @Output() emitUpdateStudent: EventEmitter<Istudent> = new EventEmitter<Istudent>()

  constructor(
    private _uuid: TodoService
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['getobj'].currentValue) {
      this.name.nativeElement.value = this.getobj.name,
        this.course.nativeElement.value = this.getobj.course,
        this.city.nativeElement.value = this.getobj.city,
        this.age.nativeElement.value = this.getobj.age,
        this.isInEditMode = true
    }
  }   

  ngOnInit(): void {
  }
  OnAddStudent() {
    if (this.course.nativeElement.value.length > 0) {
      let stdobj: Istudent = {
        name:this.name.nativeElement.value,
        course:this.course.nativeElement.value,
        city:this.city.nativeElement.value,
        age:this.age.nativeElement.value,
        id: this._uuid.uuid()
      }
      this.emitNewStudent.emit(stdobj)
      this.name.nativeElement.value='',
      this.city.nativeElement.value='',
      this.course.nativeElement.value='',
      this.age.nativeElement.value=''
    }
  }

  OnUpdateStudent() {
    let update_obj:Istudent={
      name:this.name.nativeElement.value,
      age:this.age.nativeElement.value,
      city:this.city.nativeElement.value,
      course:this.course.nativeElement.value,
      id:this.getobj.id
    }
    this.name.nativeElement.value=''
    this.age.nativeElement.value=''
    this.city.nativeElement.value=''   
     this.course.nativeElement.value=''
    this.emitUpdateStudent.emit(update_obj)
  }
}