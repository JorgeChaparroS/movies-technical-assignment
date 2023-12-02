import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMoviesViewComponent } from './main-movies-view.component';

describe('MainMoviesViewComponent', () => {
  let component: MainMoviesViewComponent;
  let fixture: ComponentFixture<MainMoviesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainMoviesViewComponent]
    });
    fixture = TestBed.createComponent(MainMoviesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
