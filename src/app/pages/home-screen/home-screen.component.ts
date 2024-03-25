import { Component } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
  selector: 'app-home-screen',
  standalone: true,
  imports: [],
  templateUrl: './home-screen.component.html',
})
export class HomeScreenComponent {
  constructor(private navigationService: NavigationService) {}
  navigate(route: string) {
    this.navigationService.navigate(route);
  }
}
