import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StuffSearchSidebar } from './stuff-search-sidebar';

describe('StuffSearchSidebar', () => {
  let component: StuffSearchSidebar;
  let fixture: ComponentFixture<StuffSearchSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StuffSearchSidebar]
    }).compileComponents();

    fixture = TestBed.createComponent(StuffSearchSidebar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
