import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components";
import { SettingsComponent } from "./components";
import { MainComponent } from "./components";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, HeaderComponent, SettingsComponent, MainComponent]
})
export class AppComponent {
  title = 'memory-game-2';
}
