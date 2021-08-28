import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouquetAddComponent } from './bouquet-add.component';

describe('BouquetNewComponent', () => {
  let component: BouquetAddComponent;
  let fixture: ComponentFixture<BouquetAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouquetAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BouquetAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
