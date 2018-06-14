import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { QuestionsService } from './shared/services/questions.service';

import { AppComponent } from './app.component';
import { BechHeaderComponent } from './presentation-components/bech-header/bech-header.component';
import { BechFooterComponent } from './presentation-components/bech-footer/bech-footer.component';
import { BechFinderComponent } from './presentation-components/bech-finder/bech-finder.component';
import { DashboardComponent } from './container-components/dashboard/dashboard.component';
import { QuestionsInDetailComponent } from './container-components/questions-in-detail/questions-in-detail.component';
import { PanelCollapseComponent } from './presentation-components/panel-collapse/panel-collapse.component';
import { BechSelectComponent } from './presentation-components/bech-select/bech-select.component';
import { FilterByPipe } from './shared/pipes/filter-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BechHeaderComponent,
    BechFooterComponent,
    BechFinderComponent,
    DashboardComponent,
    QuestionsInDetailComponent,
    PanelCollapseComponent,
    BechSelectComponent,
    FilterByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [QuestionsService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ]
})
export class AppModule { }
