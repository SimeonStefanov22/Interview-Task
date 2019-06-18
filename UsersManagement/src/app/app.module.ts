//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
//Components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListUsersComponent } from './list-users/list-users.component';
//Services
import {ListUsersService} from "./services/list-users.service";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListUsersComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent
  ],
  providers: [ListUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
