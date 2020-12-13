// Modules
import { NgModule } from '@angular/core';

// Importamos el modulo de rutas
import { Routes, RouterModule } from '@angular/router';

// Importamos los componentes que vamos a utilizar
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

// Definimos las rutas (path) y su componente asociado (component)
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {// Vamos a cargar de forma perezosa
    path: 'posts',
    // loadChildren: './pages/posts/posts.module#PostsModule' // forma antigua
    loadChildren: () => import('./pages/posts/posts.module').then( m => m.PostsModule) //nueva forma con promesa
  },
  {
    path: '**', // cualquier ruta
    redirectTo: 'home' // redirección al path 'home'
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes ) 
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
