import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { SizerComponent } from './sizer/sizer.component';
import { MySpyDirective } from './shared/directives/my-spy.directive';
import { HeroParentComponent } from './hero-parent/hero-parent.component';
import { HeroChildComponent } from './hero-child/hero-child.component';
import { VoterComponent } from './voter/voter.component';
import { VoterParentComponent } from './voter-parent/voter-parent.component';
import { AdhostDirective } from './shared/directives/adhost.directive';
import { AdbannerComponent } from './adbanner/adbanner.component';
import { DropDivModule } from './drop-div/drop-div.module';
import { HeroJobAdComponent } from './adbanner/hero-job-ad.component';
import { HeroProfileComponent } from './adbanner/hero-profile.component';
import { AdTestDirective } from './shared/directives/ad-test.directive';
import { AdtestingComponent } from './adtesting/adtesting.component';
import { Adtest1Component } from './adtesting/adtest1/adtest1.component';
import { Adtest2Component } from './adtesting/adtest2/adtest2.component';
import { HighlightDirective } from './shared/directives/highlight.directive';
import { AppUnlessDirective } from './shared/directives/app-unless.directive';
import { TransformPipe } from './shared/pipes/transform.pipe';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroFormTemplateComponent } from './form-test/hero-form-template/hero-form-template.component';
import { ForbiddenNameDirective } from './shared/directives/forbidden-name.directive';
import { IdentityRevealedValidatorDirective } from './shared/directives/identity-revealed.directive';
import { InMemoryDataService } from './shared/services/in-memory-data.service';
import { UniqueAlterEgoValidatorDirective } from './shared/directives/unique-alter-ego.directive';
import { RnHeroFormComponent } from './form-test/rn-hero-form/rn-hero-form.component';
import { DynamicFormComponent } from './form-test/dynamic-form/dynamic-form.component';
import { QuestionComponent } from './form-test/dynamic-form/question/question.component';
import { ParentserviceComponent } from './testing-service-teaching/parentservice/parentservice.component';
import { LoggerService } from './shared/services/logger.service';
import { ServiceChildComponent } from './testing-service-teaching/parentservice/service-child/service-child.component';
import { MessageParentComponent } from './testing-service-teaching/message-parent/message-parent.component';
import { MessageChildComponent } from './testing-service-teaching/message-parent/message-child/message-child.component';
import { HeroTestingModule } from './hero-testing/hero-testing.module';
import { ServiceAllComponent } from './more-d-service/service-all/service-all.component';
import { CarComponents } from './more-d-service/service-all/car-component/car-component.component';
import { HeroListComponentComponent } from './more-d-service/service-all/hero-list-component/hero-list-component.component';
import { VaillainsListComponent } from './more-d-service/service-all/vaillains-list/vaillains-list.component';
import { HeroTaxReturnComponent } from './more-d-service/service-all/hero-tax-return/hero-tax-return.component';
import { DiAllServiceModule } from './di-all-service/di-all-service.module';
import { HttpAllServicesModule } from './http-all-services/http-all-services.module';
import { httpInterfaceptorProviders } from './shared/HttpInterceptor';
import { TestingRxComponent } from './testing-rx/testing-rx.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { PagenotfindComponent } from './pagenotfind/pagenotfind.component';
import { HeroesModule } from './heroes/heroes.module';
import { HeroesRouterModule } from './heroes-router/heroes-router.module';
import { RequestCache, RequestCacheWithMapService } from './shared/HttpInterceptor/request-cache-with-map.service';




@NgModule({
  declarations: [
    TransformPipe,
    MySpyDirective,
    AdTestDirective,
    AdhostDirective,
    HighlightDirective,
    AppUnlessDirective,
    ForbiddenNameDirective,
    IdentityRevealedValidatorDirective,
    UniqueAlterEgoValidatorDirective,
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    SizerComponent,
    HeroParentComponent,
    HeroChildComponent,
    VoterComponent,
    VoterParentComponent,
    AdbannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdtestingComponent,
    Adtest1Component,
    Adtest2Component,
    NameEditorComponent,
    ProfileEditorComponent,
    HeroFormComponent,
    HeroFormTemplateComponent,
    RnHeroFormComponent,
    DynamicFormComponent,
    QuestionComponent,
    ParentserviceComponent,
    ServiceChildComponent,
    MessageParentComponent,
    MessageChildComponent,
    ServiceAllComponent,
    CarComponents,
    HeroListComponentComponent,
    VaillainsListComponent,
    HeroTaxReturnComponent,
    TestingRxComponent,
    CrisisListComponent,
    HeroListComponent,
    PagenotfindComponent,
  ],
  providers: [
    LoggerService,
    httpInterfaceptorProviders,
    { provide: RequestCache, useClass: RequestCacheWithMapService },
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent,
    Adtest1Component,
    Adtest2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DropDivModule,
    ReactiveFormsModule,
    HeroTestingModule,
    DiAllServiceModule,
    HeroesRouterModule,
    HeroesModule,
    HttpAllServicesModule,
    /* 自定义配置自定义 cookie/header 名称 */
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
      dataEncapsulation: false,
      passThruUnknownUrl: true,
      put204: false // return entity after PUT/update
    }
    ),
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
