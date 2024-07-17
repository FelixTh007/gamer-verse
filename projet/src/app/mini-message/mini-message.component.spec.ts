import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniMessageComponent } from './mini-message.component';

describe('MiniMessageComponent', () => {
  let component: MiniMessageComponent;
  let fixture: ComponentFixture<MiniMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiniMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiniMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
