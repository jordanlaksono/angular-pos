import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelompokCreateComponent } from './kelompok-create.component';

describe('KelompokCreateComponent', () => {
  let component: KelompokCreateComponent;
  let fixture: ComponentFixture<KelompokCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelompokCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelompokCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
