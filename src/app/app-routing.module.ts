import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { CursosComponent } from './componentes/cursos/cursos.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cursos',component:CursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
