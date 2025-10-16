import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SongsILike } from '././songs-i-like';

describe('SongsILike', () => {
  let component: SongsILike;
  let fixture: ComponentFixture<SongsILike>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SongsILike]
    }).compileComponents();

    fixture = TestBed.createComponent(SongsILike);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
