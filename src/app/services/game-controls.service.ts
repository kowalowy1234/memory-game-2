import { Injectable } from '@angular/core';
import { FocusModeStatusEnum } from '../enums/focus-mode.enum';
import { GameStatusEnum } from '../enums/game-status.enum';
import { SettingsStatusEnum } from '../enums/settings-status.enum';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable()
export class GameControlsService {
  focusModeStatus = FocusModeStatusEnum.OFF;
  gameStatus = GameStatusEnum.IDLE;

  settingsStatus: BehaviorSubject<SettingsStatusEnum> =
    new BehaviorSubject<SettingsStatusEnum>(SettingsStatusEnum.CLOSED);

  settingsStatus$: Observable<SettingsStatusEnum> =
    this.settingsStatus.asObservable();

  settingsSubscription$ = this.settingsStatus$.subscribe((r) =>
    this.toggleSettings(r)
  );

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
    this.gameStatus = GameStatusEnum.IDLE;
    console.log('[Game has been reset.]');
  }

  turnOffFocusMode() {
    this.focusModeStatus = FocusModeStatusEnum.OFF;
  }

  turnOnFocusMode() {
    this.focusModeStatus = FocusModeStatusEnum.ON;
  }

  closeSettings() {
    this.settingsStatus.next(SettingsStatusEnum.CLOSED);
  }

  openSettings() {
    this.settingsStatus.next(SettingsStatusEnum.OPEN);
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

  toggleSettings(r: SettingsStatusEnum | undefined) {
    switch (r) {
      case SettingsStatusEnum.OPEN:
        this.closeSettings();
        break;
      case SettingsStatusEnum.CLOSED:
        this.openSettings();
        break;
      default:
        break;
    }
    console.log(`[Settings are ${r}]`);
  }
}
