import { Component } from '@angular/core';
import { ButtonComponent } from '../common';
import { GameControlsService } from '../../services/game-controls.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  constructor(private gameControlsService: GameControlsService) {}

  start() {
    console.log(this.gameControlsService)
    // this.gameControlsService.start();
  }

  reset() {
    this.gameControlsService.reset();
  }

  focus() {
    this.gameControlsService.toggleFocus();
  }
}
