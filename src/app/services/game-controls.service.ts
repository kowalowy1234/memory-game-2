import { Injectable } from '@angular/core';
import { FocusModeStatusEnum } from '../enums/focus-mode.enum';
import { GameStatusEnum } from '../enums/game-status.enum';

@Injectable({
    providedIn: 'root'
})
export class GameControlsService {
  focusModeStatus: FocusModeStatusEnum = FocusModeStatusEnum.OFF;
  private gameStatus: GameStatusEnum = GameStatusEnum.IDLE;

  start() {
    this.gameStatus = GameStatusEnum.RUNNING;
    console.log('[Game started.]');
  }

  pause() {
    this.gameStatus = GameStatusEnum.PAUSED;
    console.log('[Game paused.]');
  }

  end() {
    this.gameStatus = GameStatusEnum.ENDED;
    console.log('[Game ended.]');
  }

  reset() {
    console.log('[Game has been reset.]');
  }

  toggleFocus() {
    switch (this.focusModeStatus) {
      case FocusModeStatusEnum.OFF:
        this.turnOnFocusMode();
        break;
      case FocusModeStatusEnum.ON:
        this.turnOffFocusMode();
        break;
      default:
        break;
    }
    console.log(`[Focus mode is ${this.focusModeStatus}]`);
  }

  turnOffFocusMode() {
    this.focusModeStatus = FocusModeStatusEnum.OFF;
  }

  turnOnFocusMode() {
    this.focusModeStatus = FocusModeStatusEnum.ON;
  }
}
