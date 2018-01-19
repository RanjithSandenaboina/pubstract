import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { RigisterComponent } from './rigister/rigister.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {RouterModule,Routes} from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ApiService } from './home/api.service';
import { HttpClientModule } from '@angular/common/http';
  const appRoutes: Routes=[
    
    {
      path: '',
     
      component : LoginComponent
    },
    {
    path : 'home',
    canActivate : [],
    component:HomeComponent,
   }
     ]

@NgModule({
  declarations: [
    AppComponent,
    RigisterComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiService],
  bootstrap: [AppComponent,LoginComponent]
})
export class AppModule { }
