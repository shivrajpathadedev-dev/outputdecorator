import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
 imports:[MatButtonModule,MatSnackBarModule],
 exports:[MatSnackBarModule,MatButtonModule]
})
export class MaterialModule{

}