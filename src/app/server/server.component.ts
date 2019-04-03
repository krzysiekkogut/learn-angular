import { Component } from '@angular/core';

type Status = 'offline' | 'online';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.scss']
})
export class ServerComponent {
  serverId: number;
  serverStatus: Status;

  constructor() {
    this.serverId = Math.ceil(Math.random() * 100);
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getColor() {
    return this.serverStatus === 'offline' ? 'darkred' : 'darkgreen';
  }
}
