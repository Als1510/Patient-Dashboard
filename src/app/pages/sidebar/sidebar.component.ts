import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Input() patients = [];
  @Input() selectedPatient = null;
  @Output() selectedPatientEvent = new EventEmitter();
  searchTerm = '';

  searchResults = [];

  ngOnChanges() {
    this.searchResults = this.patients;
  }

  search(): void {
    this.searchResults = this.patients.filter(item =>
      item.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectedPatientData(data) {
    this.selectedPatientEvent.emit(data);
  }
}
