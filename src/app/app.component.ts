import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components';
import { SettingsComponent } from './components';
import { MainComponent } from './components';
import { GameControlsService } from './services/game-controls.service';
import { SettingsStatusEnum } from './enums/settings-status.enum';
import { BackdropComponent } from './components/common/backdrop/backdrop.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SettingsComponent,
    MainComponent,
    BackdropComponent,
  ],
})
export default class AppComponent implements OnInit {
  title = 'memory-game-2';
  showSettings = false;
  settingsOpenSubscription: any;

  constructor(private gameControlsService: GameControlsService) {}

  ngOnInit(): void {
    this.settingsOpenSubscription =
      this.gameControlsService.settingsStatusObservable.subscribe((r) => {
        this.showSettings = r === SettingsStatusEnum.OPEN ? true : false;
      });
  }

  closeSettings = () => {
    this.gameControlsService.closeSettings();
  };
}
