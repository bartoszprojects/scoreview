import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScoreviewTopComponent } from './scoreview-top/scoreview-top.component';
import { ScoreviewTabsComponent } from './scoreview-tabs/scoreview-tabs.component';
import { ScoreviewTablesComponent } from './scoreview-tables/scoreview-tables.component';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [ScoreviewTopComponent, ScoreviewTabsComponent, ScoreviewTablesComponent],
  declarations: [ScoreviewTopComponent, ScoreviewTabsComponent, ScoreviewTablesComponent]
})
export class ScoreviewDataModule { }
