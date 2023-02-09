import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styleUrls: ['./deactivate.component.scss'],
})
export class DeactivateComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  canExit() {
    if (confirm('are you sure')) {
      return true;
    }
    return false;
  }
}
