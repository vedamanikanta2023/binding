import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  template: `<h1>Hello  
  {{greeting}}
  </h1>
  <button (click)="onClick($event)">Greet</button>
  <button (click)="greeting2='Welcome VVM'">Greet</button>
  <input #myInput type="text" />
  <button (click)="logTemplateVariable(myInput.value)">Log</button>
  `,
  styles: []
})
export class EventBinding {
  public greeting = 1
  public greeting2 = ""
  onClick(e: any){
    console.log("Welcome to VVM");
    // this.greeting = "Welcome to VVM type is "+ e.type;
    setInterval(() => {
      this.greeting = this.greeting +1;
    },1000)
  }

  logTemplateVariable(value:any){
    console.log(value);
  }

}
