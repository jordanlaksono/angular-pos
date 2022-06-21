import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SatuanCreateComponent } from './satuan-create.component';

describe('SatuanCreateComponent', () => {
  let component: SatuanCreateComponent;
  let fixture: ComponentFixture<SatuanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SatuanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SatuanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
