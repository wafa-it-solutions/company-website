import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InsightsOverview } from './insights-overview';

describe('InsightsOverview', () => {
  let component: InsightsOverview;
  let fixture: ComponentFixture<InsightsOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsightsOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(InsightsOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
