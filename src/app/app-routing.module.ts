import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { DirectoryDetailsComponent } from './components/directory-details/directory-details.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    pathMatch: 'full'
  },
  {
    path: 'directory',
    component: DirectoryDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
