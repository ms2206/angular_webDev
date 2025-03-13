import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'

})
export class AppComponent {
  greeting = 'Hello World!';

  // add greetings counter
  greetingCounter = 1;
  greet() {
    this.greetingCounter++;
    this.greeting = 'Hello World! ' + this.greetingCounter + ' times!';
}
}

