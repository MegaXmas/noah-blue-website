import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicVideoPage } from './music-video-page';

describe('MusicVideoPage', () => {
  let component: MusicVideoPage;
  let fixture: ComponentFixture<MusicVideoPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicVideoPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
