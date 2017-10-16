import './rxjs-extensions';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ChildComponent } from './child.component';
import { ApiService } from './ApiService.service';

@NgModule({
  declarations: [
      AppComponent, ChildComponent
  ],
  imports: [
      BrowserModule, FormsModule, HttpModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
