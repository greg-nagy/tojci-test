import { Component } from '@angular/core';

@Component({
  selector: 'tojci-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'tojci';

  doc: Document;

  constructor() {
    this.doc = new Document();
    console.log(this.doc.alma);
  }
}
