import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetFlowersComponent } from './bouquet-flowers.component';

describe('BouquetFlowersComponent', () => {
  let component: BouquetFlowersComponent;
  let fixture: ComponentFixture<BouquetFlowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetFlowersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquetFlowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
