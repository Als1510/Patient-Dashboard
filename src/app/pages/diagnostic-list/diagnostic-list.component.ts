import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagnostic-list',
  templateUrl: './diagnostic-list.component.html',
  styleUrls: ['./diagnostic-list.component.css']
})
export class DiagnosticListComponent {
  @Input() diagnosticList: any = [];
}
