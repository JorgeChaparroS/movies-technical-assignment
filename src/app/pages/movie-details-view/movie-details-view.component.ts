import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Movie } from 'src/app/model/movie';
import { AppService } from 'src/app/shared/service/app.service';

@Component({
  selector: 'app-movie-details-view',
  templateUrl: './movie-details-view.component.html',
  styleUrls: ['./movie-details-view.component.scss']
})
export class MovieDetailsViewComponent implements OnInit, AfterViewInit {

  movie: Movie | undefined;
  isMovieInWatchList = false;
  youtubeVideoId = '';
  @ViewChild('demoYouTubePlayer') demoYouTubePlayer!: ElementRef<HTMLDivElement>;
  videoWidth: number | undefined;
  videoHeight: number | undefined;

  constructor(private readonly appService: AppService,
    private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.movie = this.appService.getMovie();
    this.isMovieInWatchList = this.appService.isMovieInWatchList(this.movie?.id || 0);
    this.youtubeVideoId = this.appService.getYoutubeVideoId(this.movie?.trailerLink || '');
    console.log(this.youtubeVideoId);
  }

  ngAfterViewInit(): void {
    this.onResize();
    window.addEventListener('resize', this.onResize);
  }

  onResize(): void {
    this.videoWidth = Math.min(this.demoYouTubePlayer.nativeElement.clientWidth * 0.9, 1200);
    this.videoHeight = this.videoWidth * 0.6;
    this._changeDetectorRef.detectChanges();
  }

  onWatchlistChange(): void {
    if (this.isMovieInWatchList) {
      this.appService.removeMovieFromWatchlist(this.movie?.id || 0);
    } else {
      this.appService.addMovieToWatchList(this.movie?.id || 0);
    }
    this.isMovieInWatchList = !this.isMovieInWatchList;
  }
}
