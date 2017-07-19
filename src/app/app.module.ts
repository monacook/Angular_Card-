import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MdCardModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent, MdCardModule,
  ],
  imports: [
    BrowserModule, MdCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
