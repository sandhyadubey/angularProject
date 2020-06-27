import { Component, HostListener, Inject } from '@angular/core';
import { MyserviceService } from './myservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'this is angular project ';
  
 students:any[];
 constructor(){
 }
people:any[]=[
  {
    'name':'sandhya dubey',
    'country':'india'
  },
  {
    'name':'rakesh',
    'country':'india'
  },
  {
    'name':'john',
    'country':'UK'
  },
  {
    'name':'cristofer',
    'country':'china'
  },
  {
    'name':'jonson',
    'country':'UK'
  },
  {
    'name':'malti',
    'country':'india'
  }
];
getcolor  (country){
  switch(country){
    case  'india':
    return 'green';
    case 'china':
      return 'red';
      case 'UK':
        return 'blue';
  }
}
users=[
  'chandan',
  'sandhya',
  'ashish',
  'bandhana'
];
}