import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GamesILike } from './games-i-like';

describe('GamesILike', () => {
  let component: GamesILike;
  let fixture: ComponentFixture<GamesILike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GamesILike]
    }).compileComponents();

    fixture = TestBed.createComponent(GamesILike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
