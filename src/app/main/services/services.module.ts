import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseHighlightModule } from '@fuse/components';

import { ConfigServiceDocsComponent } from 'app/main/services/config/config.component';
import { SplashScreenServiceDocsComponent } from 'app/main/services/splash-screen/splash-screen.component';

const routes = [
    {
        path     : 'config',
        component: ConfigServiceDocsComponent
    },
    {
        path     : 'splash-screen',
        component: SplashScreenServiceDocsComponent
    }
];

@NgModule({
    declarations: [
        ConfigServiceDocsComponent,
        SplashScreenServiceDocsComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule,
        FuseHighlightModule
    ],
})

export class ServicesModule
{
}
