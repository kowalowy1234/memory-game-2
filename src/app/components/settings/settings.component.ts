import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameControlsService } from '../../services/game-controls.service';
import { BackdropComponent } from '../common/backdrop/backdrop.component';
import { ButtonComponent } from '../common/button/button.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  templateUrl: './settings.component.html',
  imports: [CommonModule, ButtonComponent],
})
export class SettingsComponent {
  constructor(private gameControlsService: GameControlsService) {}

  closeSettings = () => {
    this.gameControlsService.closeSettings();
  };

  confirmSettings = () => {
    this.closeSettings();
  };
}
