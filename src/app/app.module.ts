import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ContactFormComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
