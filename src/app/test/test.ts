import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  imports: [],
  template: `<h1>
  Welcome to {{name}} Leaning Angular!
  <span>{{2 + 2}}</span>
  </h1>
  <h2>{{"Welcome to "+ name +" learning portingjsajfiasdjlk"}}
  <h1>name length: {{name.length}}</h1>
  <h1>{{greetUser()}}</h1>
  <h1>{{url}}</h1>
  `,
  styles: []
})
export class Test {
public name  = 'Vedamanikanta';
public url = window.location.href ;
greetUser(){
  return "Hi " + this.name;
};
}
