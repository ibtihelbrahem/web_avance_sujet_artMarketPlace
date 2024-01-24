import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import {CreationArtComponent} from './creation-art/creation-art.component';
import {ModifierArtworkComponent} from './modifier-artwork/modifier-artwork.component';
import { AboutUsComponent } from './about-us/about-us.component';
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: 'ArtMarket'
      },
      {
        path: 'login',
        component: LoginComponent,
        title: 'login'
      },
      {
        path: 'register',
        component: LoginComponent,
        title: 'login'
      },
      {
        path: 'myaccount/:id',
        component: MyaccountComponent,
        title: 'acc'
      },
      {
        path: 'addArt',
        component: CreationArtComponent,
        title: 'Add Your Artwork'
      },
      {
        path: 'update/:id',
        component: ModifierArtworkComponent,
        title: 'Update Your Art'

      },
      {
        path: 'AboutUs',
        component:AboutUsComponent,
        title: 'AboutUs'
      },
      
    ];

