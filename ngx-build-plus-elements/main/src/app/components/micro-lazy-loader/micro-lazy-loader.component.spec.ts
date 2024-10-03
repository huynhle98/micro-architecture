import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroLazyLoaderComponent } from './micro-lazy-loader.component';

describe('MicroLazyLoaderComponent', () => {
  let component: MicroLazyLoaderComponent;
  let fixture: ComponentFixture<MicroLazyLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MicroLazyLoaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MicroLazyLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
