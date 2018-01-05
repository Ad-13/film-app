import { NgModule } from '@angular/core';

import {
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTooltipModule,
    MatSidenavModule,
    MatGridListModule,
    MatInputModule,
    MatFormFieldModule,
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
        MatInputModule,
        MatFormFieldModule,
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
        MatInputModule,
        MatFormFieldModule,
        MatCardModule
    ]
})

export class MaterialModule { }
