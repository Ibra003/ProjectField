import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalreportComponent } from './finalreport.component';

describe('FinalreportComponent', () => {
  let component: FinalreportComponent;
  let fixture: ComponentFixture<FinalreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalreportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinalreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
