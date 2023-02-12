import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
const routes: Routes = [
    {
      component:HomeComponent,
      path:"home"
    },{
      component:AboutComponent,
      path:"about"
    },
    {
        component:SkillsComponent,
        path:"skills"
    },{
      component:ContactComponent,
      path:"contact"
    },{
      component:EducationComponent,
      path:"educationexperience"
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
