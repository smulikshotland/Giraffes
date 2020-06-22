import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { JPageComponent } from './comps/giraffes-administration/j-page/j-page.component';
import { JItemComponent } from './comps/giraffes-administration/j-item/j-item.component';
import { JDetailsComponent } from './comps/giraffes-administration/j-details/j-details.component';
import { JLabelSpanComponent } from './comps/giraffes-administration/j-label-span/j-label-span.component';

@NgModule({
  declarations: [
    AppComponent,
    JPageComponent,
    JItemComponent,
    JDetailsComponent,
    JLabelSpanComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
