import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CRUDComponent } from "../app/crud/crud.component"
import { UpdateComponent } from "../app/update/update.component"
import { CreateComponent } from "../app/create/create.component"
import { DeleteComponent } from "../app/delete/delete.component"

const routes: Routes = [
  { path: "", component: CRUDComponent },
  { path: "update/:id", component: UpdateComponent },
  { path: "delete/:id", component: DeleteComponent },
  { path: "create", component: CreateComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports: [RouterModule],


})

export class AppRoutingModule {
  constructor() {


  }
}
