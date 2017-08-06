import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TitleComponent } from './title/title.component';
import { TodoDoneDirective } from './todo-done.directive';
import { MyFilerPipe } from './pipe/my-filer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    TodoDoneDirective,
    MyFilerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [{provide: LOCALE_ID, useValue: 'zh-TW'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
