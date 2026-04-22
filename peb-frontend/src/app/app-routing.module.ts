import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { tsInputComponent } from './shared/compoents/ts-input/ts-input.component';

const routes: Routes = [
  {path:'',component:tsInputComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
