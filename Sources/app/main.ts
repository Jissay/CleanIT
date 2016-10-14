import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './ci.module';

const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);
