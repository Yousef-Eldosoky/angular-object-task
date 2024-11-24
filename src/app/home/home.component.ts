import { NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    imports: [NgFor, NgSwitchCase, NgSwitch, NgSwitchDefault],
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
