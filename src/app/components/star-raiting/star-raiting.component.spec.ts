import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarRaitingComponent } from './star-raiting.component';

describe('StarRaitingComponent', () => {
  let component: StarRaitingComponent;
  let fixture: ComponentFixture<StarRaitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StarRaitingComponent]
    });
    fixture = TestBed.createComponent(StarRaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
