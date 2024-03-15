import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components';
import { SettingsComponent } from './components';
import { MainComponent } from './components';
import { GameControlsService } from './services/game-controls.service';
import { SettingsStatusEnum } from './enums/settings-status.enum';

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
  ],
  providers: [GameControlsService],
})
export class AppComponent {
  title = 'memory-game-2';
  showSettings = false;
  settingsOpen$ = this.gameControlsService.settingsStatus$.subscribe((r) => {
    this.showSettings = !this.showSettings;
  });
  constructor(private gameControlsService: GameControlsService) {}
}
