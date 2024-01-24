import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierArtworkComponent } from './modifier-artwork.component';

describe('ModifierArtworkComponent', () => {
  let component: ModifierArtworkComponent;
  let fixture: ComponentFixture<ModifierArtworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifierArtworkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModifierArtworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
