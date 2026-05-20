import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../model/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
@Input() getTodos!:Array<Itodo>
@Output() emitRemoveId:EventEmitter<string>=new EventEmitter<string>()
@Output() emitEditTodo:EventEmitter<Itodo>=new EventEmitter<Itodo>()

  constructor(
    private _matdialog :  MatDialog
  ) { }

  ngOnInit(): void {
  }

  onTodoRemove(todoId:string){
    // console.log(todoId);
  let config=new MatDialogConfig()
  config.width='400px'
  config.disableClose=true
  config.data=`Are you sure delete data from data base!!!`
    let newconfig=this._matdialog.open(GetConfirmComponent,config)
    newconfig.afterClosed()
    .subscribe(isconfirm=>{
      if(isconfirm){
        this.emitRemoveId.emit(todoId)
      }
    })
  }
  onEidttodo(edittodo:Itodo){
    // console.log(edittodo);
   this.emitEditTodo.emit(edittodo)
   
  }
}
