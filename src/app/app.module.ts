import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BechHeaderComponent } from './presentation-components/bech-header/bech-header.component';
import { BechFooterComponent } from './presentation-components/bech-footer/bech-footer.component';
import { BechFinderComponent } from './presentation-components/bech-finder/bech-finder.component';
import { DashboardComponent } from './container-components/dashboard/dashboard.component';
import { QuestionsInDetailComponent } from './container-components/questions-in-detail/questions-in-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    BechHeaderComponent,
    BechFooterComponent,
    BechFinderComponent,
    DashboardComponent,
    QuestionsInDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
