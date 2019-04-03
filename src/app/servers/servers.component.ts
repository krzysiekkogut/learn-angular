import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreated = false;
  servers = ['Server 1', 'Server 2'];

  userName = '';
  showDetails = false;
  clicks: string[] = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  ngOnInit() {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverName = '';
  }

  onResetUserName() {
    this.userName = '';
  }

  onToggleDetails() {
    this.showDetails = !this.showDetails;
    this.clicks.push(`Click: ${new Date().toTimeString()}`);
  }
}
