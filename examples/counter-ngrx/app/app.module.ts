import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Store, StoreModule } from '@ngrx/store';
import { CounterActions } from '../actions/counter.actions';
import { App } from './app.component';
import { Counter } from '../components/counter.component';
import { IAppState, rootReducer, INITIAL_STATE } from '../store/index';
import { NgSelect } from '../../../src';

// TODO: figure out why these are needed.
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
// END TODO.

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    StoreModule.provideStore(rootReducer, INITIAL_STATE)
  ],
  declarations: [ App, Counter, ],
  bootstrap: [ App ],
  providers: [
    CounterActions,
    NgSelect,
  ]
})
export class AppModule {
  constructor(store: Store<IAppState>, ngSelect: NgSelect) {
    ngSelect.connect(store);
  }
}
