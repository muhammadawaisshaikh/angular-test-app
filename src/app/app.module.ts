import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule }    from '@angular/common/http';

// for token interceptor 
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../app/core/interceptors/token.interceptor';

// components
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { DomManipulationComponent } from './components/dom-manipulation/dom-manipulation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    SideMenuComponent,
    HeaderComponent,
    DomManipulationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
