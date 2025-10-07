import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesILike } from './movies-i-like';

describe('MoviesILike', () => {
  let component: MoviesILike;
  let fixture: ComponentFixture<MoviesILike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesILike]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesILike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
