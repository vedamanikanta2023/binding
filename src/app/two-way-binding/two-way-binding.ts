import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-two-way-binding',
  standalone: true,
imports: [FormsModule],
  template: `<h1>Two Way Binding</h1>
  <input [(ngModel)]="name" type="text" />
  <p>Your name is {{name}}</p>
  `,
  styles: []
})
export class TwoWayBinding {
public name = ""
}
