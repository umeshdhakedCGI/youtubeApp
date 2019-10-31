import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayVideoModelComponent } from './play-video-model.component';

describe('PlayVideoModelComponent', () => {
  let component: PlayVideoModelComponent;
  let fixture: ComponentFixture<PlayVideoModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayVideoModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayVideoModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
