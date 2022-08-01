import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Branh2NewComponent } from './branh2-new.component';

describe('Branh2NewComponent', () => {
  let component: Branh2NewComponent;
  let fixture: ComponentFixture<Branh2NewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Branh2NewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Branh2NewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
