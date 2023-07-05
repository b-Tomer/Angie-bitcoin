import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactIndexComponent } from './pages/contact-index/contact-index.component';
import { AboutComponent } from './pages/about/about.component';
import { ChartComponent } from './pages/chart/chart.component';
import { ContactDetailsComponent } from './pages/contact-details/contact-details.component';
import { EditContactComponent } from './pages/edit-contact/edit-contact.component';
import { ProfileComponent } from './pages/profile/profile.component';

export const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomePageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'contact', component: ContactIndexComponent },
  { path: 'chart', component: ChartComponent },
  { path: 'contact/edit', component: EditContactComponent },
  { path: 'contact/edit/:id', component: EditContactComponent },
  { path: 'contact/:id', component: ContactDetailsComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
