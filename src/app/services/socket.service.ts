import { Injectable } from '@angular/core';
import { Socket, io } from 'socket.io-client';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private roomSocket: Socket;
  private gameSocket: Socket;

  constructor() {
    this.roomSocket = io('localhost:3000/room');
    this.gameSocket = io('localhost:3000/game');

    this.roomSocket.on('connect', () => {
      console.log('[Room socket connected]');
    });

    this.roomSocket.on('disconnect', () => {
      console.log('[Room socket disconnected]');
    });

    this.gameSocket.on('connect', () => {
      console.log('[Game socket connected]');
    });

    this.gameSocket.on('disconnect', () => {
      console.log('[Room socket disconnected]');
    });
  }

  public connectRoomSocket() {
    this.roomSocket.connect();
  }

  public connectGameSocket() {
    this.gameSocket.connect();
  }
}
