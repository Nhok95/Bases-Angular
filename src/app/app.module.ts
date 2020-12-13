// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';  //Modulo de rutas
import { PagesModule } from './pages/pages.module';       //Modulo de page-components
import { HttpClientModule } from '@angular/common/http';  //Modulo para hacer peticiones http

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
