import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from 'src/app/model/todo';
import { SnackbarService } from 'src/app/service/snackbar.service';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  //API call to fetch todos from  data base
  edittodoobj!:Itodo
  @Input() getedit!:Array<Itodo>
todosArr:Array<Itodo>=[
  {
    todoItem:'JS',
    todoId:'123',
    isCompleted: false
  },
  {
    todoItem:'HTML',
    todoId:'124',
    isCompleted: true
  },
  {
    todoItem:'CSS',
    todoId:'125',
    isCompleted: false
  }
]
  constructor(private _snackbarservice:SnackbarService
  ) { }

  ngOnInit(): void {
  }
  getNewTodo(todo:Itodo){
    this.todosArr.push(todo)
    this._snackbarservice.opensnack(`The todo ${todo.todoItem} is added successfully!!!!`)
  }

  getRemoveId(removeId:string){
    let getIndex=this.todosArr.findIndex(t=>t.todoId===removeId)
  let removetodo=   this.todosArr.splice(getIndex,1)
     this._snackbarservice.opensnack(`The todo ${removetodo[0].todoItem} is removed successfully!!!`)
  }

  onemitevent(updatetodo:Itodo){
    let getIndexup=this.todosArr.findIndex(t=>(t.todoId===updatetodo.todoId))
    this.todosArr[getIndexup] =updatetodo
    this._snackbarservice.opensnack(`The todo ${updatetodo.todoItem} is Updated Successfully!!!`)
  }

  getEditTod(editTodo:Itodo){
    this.edittodoobj=editTodo
  }
}
