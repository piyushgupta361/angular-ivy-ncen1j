import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  greeting(): string {
    return 'hello sir!!!';
  }
  linkurl: string = 'http://google.com';
  emp: Employee = new Employee(10, 'piyush');
  counter: number = 0;
  increment() {
    this.counter++;
  }
}
class Employee {
  constructor(public id: number, public name: string) {}
}
