import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-diagnosis-history',
  templateUrl: './diagnosis-history.component.html',
  styleUrls: ['./diagnosis-history.component.css']
})
export class DiagnosisHistoryComponent implements OnChanges, OnInit {
  @Input() diagnosticHistory: any;
  chart: any;
  ngOnInit() {
    if (this.diagnosticHistory && this.diagnosticHistory.length > 0) {
      this.createChart();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['diagnosticHistory'] && !changes['diagnosticHistory'].firstChange) {
      this.createChart();
    }
  }

  createChart() {
    if (this.diagnosticHistory && this.diagnosticHistory.length > 0) {
      const systolicData = this.diagnosticHistory.map(item => item.blood_pressure.systolic.value);
      const diastolicData = this.diagnosticHistory.map(item => item.blood_pressure.diastolic.value);
      const labels = this.diagnosticHistory.map(item => `${item.month} ${item.year}`);

      const ctx = document.getElementById('myChart') as HTMLCanvasElement;
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: labels,
          datasets: [
            {
              label: 'Systolic',
              data: systolicData,
              borderColor: 'pink',
              backgroundColor: 'rgba(255, 192, 203, 0.5)',
              fill: true,
              pointRadius: 5,
              pointBackgroundColor: 'pink',
              pointBorderColor: 'white'
            },
            {
              label: 'Diastolic',
              data: diastolicData,
              borderColor: 'blue',
              backgroundColor: 'rgba(153, 204, 255, 0.5)',
              fill: true,
              pointRadius: 5,
              pointBackgroundColor: 'blue',
              pointBorderColor: 'white'
            }
          ]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
              max: 180,
              min: 60,
              ticks: {
                stepSize: 20
              }
            }
          },
          plugins: {
            legend: {
              position: 'top',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle',
                padding: 10
              }
            }
          }
        }
      });
    }
  }
}
