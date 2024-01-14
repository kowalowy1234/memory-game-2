import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() theme: 'default' | 'green' | 'red' = 'default';
  @Input() buttonText: string | undefined;
  @Input() click: () => void = () => {};

  themeProperties = {
    default: 'default',
    green: 'green',
    red: 'red',
  };
}
