import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular';
  isCollapsed = true;

  @HostListener('document:click', ['$event']) clickedOutside($event: any) {
    this. collapseNavbar();  // Hide navigation menu on outside click
    // console.log('CLICKED OUTSIDE');
  }
  constructor() { }

  ngOnInit() {
  }

  collapseNavbar() {
    if (this.isCollapsed === false) {
      this.isCollapsed = true;
    }
  }

  clickedInside($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();  // <- stop propagation on lower layers
    // console.log('CLICKED INSIDE, MENU WON\'T HIDE');
  }
}
