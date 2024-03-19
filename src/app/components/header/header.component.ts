import { Component } from '@angular/core';
import { ButtonComponent } from '../common';
import { GameControlsService } from '../../services/game-controls.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  iconSpin = false;
  settingsOpen: any;

  constructor(private gameControlsService: GameControlsService) {}
}
