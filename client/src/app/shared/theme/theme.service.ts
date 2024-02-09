import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private _theme = new BehaviorSubject<string>('light');
  theme$ = this._theme.asObservable();

  setTheme(theme: string): void {
    this._theme.next(theme);
  }

  getTheme(): string {
    return this._theme.value;
  }
}