import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  peopleByCountry: any[] = [
    {
      country: 'UK',
      people: [
        { name: 'Douglas Pace' },
        { name: 'Mcleod Mueller' }
      ]
    },
    {
      country: 'US',
      people: [
        { name: 'Day Meyers' },
        { name: 'Aguirre Ellis' },
        { name: 'Cook Tyson' }
      ]
    },
    {
      country: 'MARS',
      people: [
        { name: 'Douglas Pace' },
        { name: 'Mcleod Mueller' }
      ]
    }
  ];
}
