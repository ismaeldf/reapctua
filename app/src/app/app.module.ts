import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

import { MyApp } from './app.component';
import { CompanyProvider } from '../providers/company/company';
import { ApiProvider } from '../providers/api/api';
import { AuthProvider } from '../providers/auth/auth';
import { UserProvider } from '../providers/user/user';
import { TokenInterceptorProvider } from '../providers/token-interceptor/token-interceptor';


@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true,
    }),
    IonicStorageModule.forRoot({
      name: '__repactua',
      storeName: 'repactua',
      driverOrder: ['sqlite', 'indexeddb', 'websql', 'localstorage']
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorProvider, multi: true },
    StatusBar,
    SplashScreen,
    CompanyProvider,
    ApiProvider,
    AuthProvider,
    UserProvider
  ]
})
export class AppModule { }
