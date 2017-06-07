import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortenerComponent } from './shortener.component';
import {FormsModule} from "@angular/forms";

describe('ShortenerComponent', () => {
  let component: ShortenerComponent;
  let fixture: ComponentFixture<ShortenerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortenerComponent ],
      imports: [
        FormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortenerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create itself', () => {
    expect(component).toBeTruthy();
  });

  it('should update inputUsed if there is a link', () => {
    component.onInput();
    expect(component.inputUsed).toBeFalsy();
    component.link = "some link";
    component.onInput();
    expect(component.inputUsed).toBeTruthy();
    component.link = '';
    component.onInput();
    expect(component.inputUsed).toBeFalsy();
  })
});
