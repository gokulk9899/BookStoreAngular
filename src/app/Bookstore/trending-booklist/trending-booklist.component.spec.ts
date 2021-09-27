import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrendingBooklistComponent } from './trending-booklist.component';

describe('TrendingBooklistComponent', () => {
  let component: TrendingBooklistComponent;
  let fixture: ComponentFixture<TrendingBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrendingBooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrendingBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
