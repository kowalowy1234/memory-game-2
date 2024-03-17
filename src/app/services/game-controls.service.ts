import { Injectable } from '@angular/core';
import { FocusModeStatusEnum } from '../enums/focus-mode.enum';
import { GameStatusEnum } from '../enums/game-status.enum';
import { SettingsStatusEnum } from '../enums/settings-status.enum';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class GameControlsService {
  focusModeStatus = FocusModeStatusEnum.OFF;
  gameStatus = GameStatusEnum.IDLE;

  settingsStatusSubject: BehaviorSubject<SettingsStatusEnum> =
    new BehaviorSubject<SettingsStatusEnum>(SettingsStatusEnum.CLOSED);

  settingsStatusObservable: Observable<SettingsStatusEnum> =
    this.settingsStatusSubject.asObservable();

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
    this.settingsStatusSubject.next(SettingsStatusEnum.CLOSED);
  }

  openSettings() {
    this.settingsStatusSubject.next(SettingsStatusEnum.OPEN);
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

  toggleSettings() {
    let currentSettingStatus = this.settingsStatusSubject.getValue();

    switch (currentSettingStatus) {
      case SettingsStatusEnum.OPEN:
        this.closeSettings();
        break;
      case SettingsStatusEnum.CLOSED:
        this.openSettings();
        break;
      default:
        break;
    }

    // refresh text info
    currentSettingStatus = this.settingsStatusSubject.getValue();
    console.log(`[Settings are ${currentSettingStatus}]`);
  }
}
