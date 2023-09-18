import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PevaluaComponent } from './pevalua.component';

describe('PevaluaComponent', () => {
  let component: PevaluaComponent;
  let fixture: ComponentFixture<PevaluaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PevaluaComponent]
    });
    fixture = TestBed.createComponent(PevaluaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
