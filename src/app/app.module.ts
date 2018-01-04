import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { FilmCardComponent } from './film-card/film-card.component';
import { TestAngComponent } from './test-ang/test-ang.component';
import { FilmCardService } from './film-card/film-card.service';


@NgModule({
  declarations: [
    AppComponent,
    FilmCardComponent,
    TestAngComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [FilmCardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
