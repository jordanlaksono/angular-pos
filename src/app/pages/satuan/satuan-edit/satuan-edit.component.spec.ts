import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatuanEditComponent } from './satuan-edit.component';

describe('SatuanEditComponent', () => {
  let component: SatuanEditComponent;
  let fixture: ComponentFixture<SatuanEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatuanEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatuanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
