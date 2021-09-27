import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestBooklistComponent } from './latest-booklist.component';

describe('LatestBooklistComponent', () => {
  let component: LatestBooklistComponent;
  let fixture: ComponentFixture<LatestBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestBooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
