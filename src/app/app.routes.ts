import { Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home-screen/home-screen.component';
import { RoomSelectionComponent } from './pages/room-selection/room-selection.component';
import { GameScreenComponent } from './pages/game-screen/game-screen.component';

export const routes: Routes = [
  { path: '', component: HomeScreenComponent },
  { path: 'rooms', component: RoomSelectionComponent },
  { path: 'game', component: GameScreenComponent },
];
