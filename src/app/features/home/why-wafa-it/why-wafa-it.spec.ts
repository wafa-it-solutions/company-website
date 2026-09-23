import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhyWafaIt } from './why-wafa-it';

describe('WhyWafaIt', () => {
  let component: WhyWafaIt;
  let fixture: ComponentFixture<WhyWafaIt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyWafaIt],
    }).compileComponents();

    fixture = TestBed.createComponent(WhyWafaIt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
