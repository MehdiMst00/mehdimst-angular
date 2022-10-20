import { ContactComponent } from './pages/contact/contact.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { ResumeComponent } from './pages/resume/resume.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    data: { animationState: 'HomePage' },
  },
  {
    path: 'about-me',
    component: AboutMeComponent,
    data: { animationState: 'AboutMePage' },
  },
  {
    path: 'resume',
    component: ResumeComponent,
    data: { animationState: 'ResumePage' },
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { animationState: 'PortfolioPage' },
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animationState: 'ContactPage' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
