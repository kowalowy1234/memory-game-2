import { Component } from '@angular/core';
import { InfoSidebarComponent } from '../../components/info-sidebar/info-sidebar.component';

@Component({
  selector: 'app-game-screen',
  standalone: true,
  imports: [InfoSidebarComponent],
  templateUrl: './game-screen.component.html',
})
export class GameScreenComponent {

}
