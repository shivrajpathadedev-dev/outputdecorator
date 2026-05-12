import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn:'root'
})
export class SnackbarService{
   constructor(
    private _snackbarservice:MatSnackBar
   ){}
   opensnack(msg:string){
  this._snackbarservice.open(msg,'Closed',{
    duration:1000,
    horizontalPosition:"left",
    verticalPosition:'top'
  })
   }
}