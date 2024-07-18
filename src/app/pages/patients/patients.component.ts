import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent {
  patientData;
  selectedPatient;

  apiUrl = 'assets/data.json';

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) { }

  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  ngOnInit() {
    this.getData().subscribe((data: any[]) => {
      this.patientData = data;
      this.selectedPatient = this.patientData?.length ? this.patientData[0] : null;
    });
  }

  setSelectedPatientData(data) {
    this.selectedPatient = data;
    this.cdr.detectChanges();
  }
}
