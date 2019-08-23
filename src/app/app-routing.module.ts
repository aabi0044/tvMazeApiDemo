import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { PeopleComponent } from './pages/home/people/people.component';
import { ShowsComponent } from './pages/home/shows/shows.component';
import { SingleShowComponent } from './pages/home/single-show/single-show.component';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { ContentComponent } from './pages/home/content/content.component';
import { CastAndCrewComponent } from './pages/home/single-show/cast-and-crew/cast-and-crew.component';


const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home/content'
},
{
  path:'home',
  component:HomeComponent,children:[
    {
      path:'people/:id',
      component:PeopleComponent
    },
    {
      path:'shows',
      component:ShowsComponent
    },
    {
      path:'show-details/:id',
      component:SingleShowComponent
    },
    {
      path:'cast-and-crew/:id',
      component:CastAndCrewComponent
    },
    {
      path:'content',
      component:ContentComponent
    }

  ]
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:RegisterComponent
},
{
  path:'contact-us',
  component:ContactUsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
