import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements DoCheck {
  title = 'main';

  ngDoCheck() {
    console.log('=== main app component ngDoCheck ===');
  }
}
