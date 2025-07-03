import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JesterHome } from './jester-home';

describe('JesterHome', () => {
  let component: JesterHome;
  let fixture: ComponentFixture<JesterHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JesterHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JesterHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
