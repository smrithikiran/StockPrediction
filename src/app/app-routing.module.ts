import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router'
import { ViewComponent } from './view/view.component';
import { SearchComponent } from './search/search.component';
const routes: Routes = [
  {path:'',redirectTo:'/search',pathMatch: 'full'},
  {path:'search',component:SearchComponent},
  {path:'search/view/:id',component:ViewComponent},
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
export const routingComponent=[
  SearchComponent,
  ViewComponent
]