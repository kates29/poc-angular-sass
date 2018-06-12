import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './container-components/dashboard/dashboard.component';
import { QuestionsInDetailComponent } from './container-components/questions-in-detail/questions-in-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'questions-in-detail',  component: QuestionsInDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]

})
export class AppRoutingModule {}
