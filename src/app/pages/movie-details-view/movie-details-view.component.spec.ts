import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsViewComponent } from './movie-details-view.component';

describe('MovieDetailsViewComponent', () => {
  let component: MovieDetailsViewComponent;
  let fixture: ComponentFixture<MovieDetailsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailsViewComponent]
    });
    fixture = TestBed.createComponent(MovieDetailsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
