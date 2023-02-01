import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root#subapp1',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements DoCheck {

  ngDoCheck(): void {
    console.log('==== subapp1 do check ====')
  }

  title = 'subapp1';


  isActive() {
    return Date.now() % 2 === 0;
  }
}
