import { Component } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-darkmode-toggle',
  templateUrl: './darkmode-toggle.component.html',
  styleUrls: ['./darkmode-toggle.component.scss']
})
export class DarkmodeToggleComponent {
  darkMode$: Observable<boolean> = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) { }

  onToggle(): void {
    this.darkModeService.toggle();    
  }
}
