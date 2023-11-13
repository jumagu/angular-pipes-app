import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { TableModule } from 'primeng/table';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { FieldsetModule } from 'primeng/fieldset';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  exports: [
    CardModule,
    PanelModule,
    TableModule,
    ButtonModule,
    RippleModule,
    MenubarModule,
    ToolbarModule,
    FieldsetModule,
    DropdownModule,
  ],
})
export class PrimeNgModule {}
