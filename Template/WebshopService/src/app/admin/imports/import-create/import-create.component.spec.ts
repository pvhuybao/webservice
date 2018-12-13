import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCreateComponent } from './import-create.component';

describe('ImportCreateComponent', () => {
  let component: ImportCreateComponent;
  let fixture: ComponentFixture<ImportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
