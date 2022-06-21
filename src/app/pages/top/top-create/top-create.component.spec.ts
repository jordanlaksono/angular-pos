import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCreateComponent } from './top-create.component';

describe('TopCreateComponent', () => {
  let component: TopCreateComponent;
  let fixture: ComponentFixture<TopCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
