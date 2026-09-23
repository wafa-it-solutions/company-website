import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IndustriesOverview } from './industries-overview';

describe('IndustriesOverview', () => {
  let component: IndustriesOverview;
  let fixture: ComponentFixture<IndustriesOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IndustriesOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(IndustriesOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
