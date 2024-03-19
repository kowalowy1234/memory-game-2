import { Component } from '@angular/core';
import { ButtonComponent } from '../common';
import { GameControlsService } from '../../services/game-controls.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info-sidebar',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './info-sidebar.component.html',
})
export class InfoSidebarComponent {
  hidePlayerList = true;
  constructor(private gameControlsService: GameControlsService) {}

  toggleSettings = () => {
    this.gameControlsService.toggleSettings();
  };

  start = () => {
    this.gameControlsService.start();
  };

  reset = () => {
    this.gameControlsService.reset();
  };

  focus = () => {
    this.gameControlsService.toggleFocus();
  };

  togglePlayerList = () => {
    this.hidePlayerList = !this.hidePlayerList;
  };
}
