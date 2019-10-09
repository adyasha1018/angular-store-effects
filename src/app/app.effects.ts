import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DataService } from './data.service';
 
@Injectable()
export class AppEffects {
 
  loadImages = createEffect(() =>
    this.actions$.pipe(
      ofType('Load Images'),
      mergeMap(() => this.dataService.loadAllImages()
        .pipe(
          map(images => ({ type: '[Images API] Images Loaded Success', payload: images })),
          catchError(() => of({ type: '[Images API] Images Loaded Error' }))
        )
      )
    )
  );
 
  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) {}
}