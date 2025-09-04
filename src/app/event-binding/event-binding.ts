import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  template: `<h1>
{{greeting}}
  </h1>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting='Welcome VVM'">Greet</button>
  `,
  styleUrl: './event-binding.css'
})
export class EventBinding {
  public greeting = ""
  onClick(e: any){
    console.log("Welcome to VVM");
    this.greeting = "Welcome to VVM type is "+ e.type;
  }

}
