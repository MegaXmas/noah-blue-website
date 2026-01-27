import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowsILike } from './shows-i-like';

describe('ShowsILike', () => {
  let component: ShowsILike;
  let fixture: ComponentFixture<ShowsILike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowsILike]
    }).compileComponents();

    fixture = TestBed.createComponent(ShowsILike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
