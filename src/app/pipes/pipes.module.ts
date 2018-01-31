import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleSetterPipe } from './title-setter.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TitleSetterPipe],
  exports: [TitleSetterPipe],
})
export class PipesModule {}
