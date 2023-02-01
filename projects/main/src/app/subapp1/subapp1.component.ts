import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import { loadMicroApp, MicroApp } from 'qiankun';

@Component({
  selector: 'app-subapp1',
  template: `
    <div class="subapp1-container"></div>
  `,
})
export class Subapp1Component implements AfterViewInit, OnDestroy {

  microApp!: MicroApp;

  constructor() { }

  ngOnDestroy(): void {
    this.microApp?.unmount();
  }

  ngAfterViewInit(): void {
    this.microApp = loadMicroApp({
      name: 'subapp1',
      entry: 'http://localhost:4201',
      container: '.subapp1-container',
    });
  }

}
