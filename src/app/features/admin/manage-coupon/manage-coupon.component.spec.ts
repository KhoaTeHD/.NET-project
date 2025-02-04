import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCouponComponent } from './manage-coupon.component';

describe('ManageCouponComponent', () => {
  let component: ManageCouponComponent;
  let fixture: ComponentFixture<ManageCouponComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageCouponComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageCouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
