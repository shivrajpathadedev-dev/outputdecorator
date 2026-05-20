import { Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { Itodo } from 'src/app/model/todo';
import { TodoService } from 'src/app/service/todos.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit ,OnChanges{
  @Input() getedit!: Itodo
  iseditMode: boolean = false
  @ViewChild('todoItem') todoItem!: ElementRef
  @ViewChild('isCompleted') isCompleted!: ElementRef
  @Output() emitNewTodo: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  @Output() emitodoadd: EventEmitter<Itodo> = new EventEmitter<Itodo>()
  constructor(
    private _todoService: TodoService
  ){}
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['getedit'].currentValue){
      this.todoItem.nativeElement.value=this.getedit.todoItem
      this.isCompleted.nativeElement.value=this.getedit.isCompleted
      this.iseditMode=true
    }
  }
  ngOnInit(): void {
  }
  OnTodoAdd() {
    if (this.todoItem.nativeElement.value.length > 0) {
      let todo: Itodo = {
        todoItem: this.todoItem.nativeElement.value,
        isCompleted: this.isCompleted.nativeElement.value === "true" ? true : false,
        todoId: this._todoService.uuid()
      }
      this.todoItem.nativeElement.value = '';
      this.isCompleted.nativeElement.value = true;
      this.emitNewTodo.emit(todo)
    }
  }
  OnTodoUpdate() {
    if(this.todoItem.nativeElement.value.length>0){
      let update_obj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.getedit.todoId,
      isCompleted: this.isCompleted.nativeElement.value
    }
    this.emitodoadd.emit(update_obj)
    this.iseditMode = false
    this.todoItem.nativeElement.value =''
    this.isCompleted.nativeElement.value = 'true'
    }
    }
}
