import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MaterialModule} from "@my-first-nx/material";

@NgModule({
  imports: [CommonModule, MaterialModule],
})
export class TweetsModule {
}
