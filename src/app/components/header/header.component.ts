import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../common';
import { GameControlsService } from '../../services/game-controls.service';
import { CommonModule } from '@angular/common';
import { SettingsStatusEnum } from '../../enums/settings-status.enum';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  iconSpin = false;
  settingsOpen: any;

  constructor(private gameControlsService: GameControlsService) {}

  ngOnInit(): void {
    this.settingsOpen =
      this.gameControlsService.settingsStatusObservable.subscribe((r) => {
        this.iconSpin = r === SettingsStatusEnum.OPEN ? true : false;
      });
  }

  start = () => {
    this.gameControlsService.start();
  };

  reset = () => {
    this.gameControlsService.reset();
  };

  focus = () => {
    this.gameControlsService.toggleFocus();
  };

  toggleSettings = () => {
    this.gameControlsService.toggleSettings();
  };
}
