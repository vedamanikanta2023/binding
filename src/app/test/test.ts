import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  template: `<h1>
    Welcome to {{name}} Leanring Angular!
  </h1>
  <input [id]="myId" type="text" value="VVM" />
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="VVM" />
  <h1 class="text-success text-special">From VVM</h1>
<h1 [class]="successClass">veda learning</h1>
<h1 [class.text-danger]="hasError">veda learning</h1>
  <h2 [class]="messageClasses">Anular 2025</h2>
  `,
  styles: [`
    .text-success {
      color: green;
    }
      .text-danger {
      color: red;
    }
      .text-special {
      font-style: italic;
  }
    `]
})
export class Test {
public name  = 'Vedamanikanta';
public url = window.location.href ;
public myId = "testId";
public isDisabled = false;

// class binding
public  successClass = "text-success";
public hasError = true;
public isSpecial = true;
public messageClasses = {
  "text-success": !this.hasError,
  "text-danger": this.hasError,
  "text-special": this.isSpecial
};
// class binding end

greetUser(){
  return "Hi " + this.name;
};
}
