import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automation-layout',
  templateUrl: './automation-layout.component.html',
  styleUrls: ['./automation-layout.component.css']
})
export class AutomationLayoutComponent {

  constructor(private router: Router) {}

  logout(): void {
    this.router.navigate(['/login']);
  }
}