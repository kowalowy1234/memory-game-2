import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  standalone: true,
  templateUrl: './backdrop.component.html',
})
export class BackdropComponent {
  @Input() click = () => {};

  hide = () => {
    this.click();
  };
}
