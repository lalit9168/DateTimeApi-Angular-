import { Component } from '@angular/core';
import { TimezoneComponent } from './timezone/timezone.component';
//import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [TimezoneComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'time-zone-app';
}
