import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  template: `<h1>
  Welcome to {{name}} Leanring Angular!
  </h1>
  <input [id]="myId" type="text" value="VVM" />
  <input bind-disabled="isDisabled" id="{{myId}}" type="text" value="VVM" />

  
  `,
  styles: []
})
export class Test {
public name  = 'Vedamanikanta';
public url = window.location.href ;
public myId = "testId";
public isDisabled = false;
greetUser(){
  return "Hi " + this.name;
};
}
