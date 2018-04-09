import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material/material.module';
import { PipesModule } from '../pipes/pipes.module';

import { FooterComponent } from './footer/footer.component';
import { SideNavListComponent } from './side-nav-list/side-nav-list.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

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
