import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
})
export class Testlib2Module {
  constructor(doc:Document) {
    doc.alma;
  }
}
