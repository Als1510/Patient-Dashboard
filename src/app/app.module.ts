import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiagnosisHistoryComponent } from './pages/diagnosis-history/diagnosis-history.component';
import { DiagnosticListComponent } from './pages/diagnostic-list/diagnostic-list.component';
import { LabResultsComponent } from './pages/lab-results/lab-results.component';
import { NavbarComponent } from './pages/navbar/navbar.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileComponent,
    DiagnosisHistoryComponent,
    DiagnosticListComponent,
    LabResultsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
