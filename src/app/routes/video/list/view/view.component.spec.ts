import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {VideoListViewComponent} from './view.component';

describe('VideoListViewComponent', () => {
  let component: VideoListViewComponent;
  let fixture: ComponentFixture<VideoListViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoListViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoListViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
