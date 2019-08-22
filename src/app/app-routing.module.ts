import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';


const routes: Routes = [ {
  path: '',
  pathMatch: 'full',
  redirectTo: 'home'
},
{
  path:'home',
  component:HomeComponent
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
