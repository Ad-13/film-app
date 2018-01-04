import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatGridListModule,
    MatCardModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatGridListModule,
        MatCardModule
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatToolbarModule,
        MatIconModule,
        MatTooltipModule,
        MatSidenavModule,
        MatGridListModule,
        MatCardModule
    ]
})

export class MaterialModule { }
