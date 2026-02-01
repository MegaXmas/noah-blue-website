import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnimeILike } from './anime-i-like';

describe('AnimeILike', () => {
  let component: AnimeILike;
  let fixture: ComponentFixture<AnimeILike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimeILike]
    }).compileComponents();

    fixture = TestBed.createComponent(AnimeILike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
