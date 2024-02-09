import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scrolltop',
  templateUrl: './scrolltop.component.html',
  styleUrls: ['./scrolltop.component.scss']
})
export class ScrolltopComponent {
  isButtonVisible = false;

  constructor() { }
  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
    this.isButtonVisible = scrollPosition > pageHeight * 0.5;
  }

  scrollToTop() {
    document.documentElement.scrollTop = 0;
  }
}
