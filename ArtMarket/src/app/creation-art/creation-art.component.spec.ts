import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationArtComponent } from './creation-art.component';

describe('CreationArtComponent', () => {
  let component: CreationArtComponent;
  let fixture: ComponentFixture<CreationArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreationArtComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreationArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
