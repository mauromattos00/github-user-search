import { createAction, props } from '@ngrx/store';

export const search = createAction('[USER] Search', props<{ query: string }>());
export const searchSuccess = createAction(
  '[USER] Search Success',
  props<any>(),
);
