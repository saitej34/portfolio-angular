import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProjectsComponent} from './components/projects/projects.component'
import { HomeComponent } from './components/home/home.component';
import { FirstComponent } from './components/first/first.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
const routes: Routes = [
    {
        component:ProjectsComponent,
        path:'projects'

    },{
      component:HomeComponent,
      path:"home"
    },{
      component:AboutComponent,
      path:"about"
    },
    {
        component:SkillsComponent,
        path:"skills"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
