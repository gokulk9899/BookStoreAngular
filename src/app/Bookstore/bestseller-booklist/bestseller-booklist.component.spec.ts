import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestsellerBooklistComponent } from './bestseller-booklist.component';

describe('BestsellerBooklistComponent', () => {
  let component: BestsellerBooklistComponent;
  let fixture: ComponentFixture<BestsellerBooklistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BestsellerBooklistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BestsellerBooklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
