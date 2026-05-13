import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from 'src/app/get-confirm/get-confirm.component';
import { Istudent } from 'src/app/model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  @Input() getstudent!: Array<Istudent>
@Output() emitRemoevId:EventEmitter<string>=new EventEmitter<string>()
@Output() emitEditStd:EventEmitter<Istudent>=new EventEmitter<Istudent>()
  constructor(
    private _matdailog:MatDialog
  ) { }

  ngOnInit(): void {
  }

  onRemovestd(stdId:string){
    // console.log(todoId);
  let config=new MatDialogConfig()
  config.width='400px'
  config.disableClose=true
  config.data=`Are you sure delete ${stdId} data from data base!!!`
    let newconfig=this._matdailog.open(GetConfirmComponent,config)
    newconfig.afterClosed()
    .subscribe(isconfirm=>{
      if(isconfirm){
        this.emitRemoevId.emit(stdId)
      }
    })
  }

  onEditstd(editstd:Istudent){
    this.emitEditStd.emit(editstd)

  }
}
