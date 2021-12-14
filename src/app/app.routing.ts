import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { MediaComponent } from './media/media.component';
import { NewsComponent } from './news/news.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },  
  {
    path: 'news',
    component: NewsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'media',
    component: MediaComponent,
  },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HomeComponent
  }
];

export const routing = RouterModule.forRoot(appRoutes);
