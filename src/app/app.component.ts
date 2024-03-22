import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components';
import { SettingsComponent } from './components';
import { MainComponent } from './components';
import { SocketService } from './services/socket.service';

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
})
export class AppComponent implements OnInit {
  title = 'memory-game-2';

  constructor(private readonly socketService: SocketService) {}

  ngOnInit(): void {
  }
}
