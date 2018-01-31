import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [CommonModule, MaterialModule, FlexLayoutModule],
  declarations: [FooterComponent],
  exports: [FooterComponent],
})
export class ComponentsModule {}
