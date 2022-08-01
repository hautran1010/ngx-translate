import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { NgxTranslateModule } from './shared/translate/translate.module';
import { Branch2Component } from './branch2/branch2.component';
import { Branch2NewComponent } from './branch2-new/branch2-new.component';
import { Branch2NewNewComponent } from './branch2-new-new/branch2-new-new.component';
import { Branch1Component } from './branch1/branch1.component';




@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    Branch2Component,
    Branch2NewComponent,
    Branch2NewNewComponent,
    Branch1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxTranslateModule
    // HttpClientModule,
    // TranslateModule.forRoot(
    //   {
    //     loader: {
    //       provide: TranslateLoader,
    //       useFactory: HttpLoaderFactory,
    //       deps: [HttpClient]
    //     }
    //   }
    // )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
