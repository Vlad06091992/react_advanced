import { StateSchema } from 'app/providers/StoreProvider';
import { createSelector } from 'reselect';

export const getUIScroll = (state:StateSchema) => state.scrollSave.scroll;
// export const getUIScrollByPath = (state:StateSchema, path:string) => state.scrollSave.scroll[path];
export const getUIScrollByPath = createSelector(
    getUIScroll,
    (state:StateSchema, path:string) => path,
    (scroll, path:string) => scroll[path] || 0,
);
