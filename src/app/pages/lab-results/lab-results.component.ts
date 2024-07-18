import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-lab-results',
  templateUrl: './lab-results.component.html',
  styleUrls: ['./lab-results.component.css']
})
export class LabResultsComponent {

  @Input() labResults: any = [];
}
