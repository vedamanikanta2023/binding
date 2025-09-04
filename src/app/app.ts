import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Test } from './test/test';
import { EventBinding } from './event-binding/event-binding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Test,EventBinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('binding');
}
