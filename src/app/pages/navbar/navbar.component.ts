import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  pages = [
    {
      imgURL: "../../../assets/overview.png",
      name: "Overview",
    },
    {
      imgURL: "../../../assets/patients.png",
      name: "Patients",
      link: 'patients'
    },
    {
      imgURL: "../../../assets/schedule.png",
      name: "Schedule",
    },
    {
      imgURL: "../../../assets/message.png",
      name: "Message",
    },
    {
      imgURL: "../../../assets/transactions.png",
      name: "Transactions",
    },
  ]
}
