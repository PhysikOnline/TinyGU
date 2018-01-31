import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule,
    PipesModule,
  ],
  declarations: [FooterComponent, SideNavListComponent, ToolbarComponent],
  exports: [FooterComponent, SideNavListComponent, ToolbarComponent],
})
export class ComponentsModule {}
