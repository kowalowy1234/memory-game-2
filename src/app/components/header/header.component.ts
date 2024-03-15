import { Component } from '@angular/core';
import { ButtonComponent } from '../common';
import { GameControlsService } from '../../services/game-controls.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  providers: [GameControlsService],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private gameControlsService: GameControlsService) {}

  // Arrow function in order to prevent 'this' binding to child
  start = () => {
    this.gameControlsService.start();
  };

  // Arrow function in order to prevent 'this' binding to child
  reset = () => {
    this.gameControlsService.reset();
  };

  // Arrow function in order to prevent 'this' binding to child
  focus = () => {
    this.gameControlsService.toggleFocus();
  };
}
