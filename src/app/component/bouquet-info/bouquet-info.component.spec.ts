import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetInfoComponent } from './bouquet-info.component';

describe('BouquetInfoComponent', () => {
  let component: BouquetInfoComponent;
  let fixture: ComponentFixture<BouquetInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
