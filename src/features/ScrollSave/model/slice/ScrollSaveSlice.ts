import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollSaveSchema } from '../types/ScrollSaveSchema';

const initialState:ScrollSaveSchema = {
    scroll: {}
};

const ScrollSaveSlice = createSlice({
    name: 'ScrollSaveSlice',
    initialState,
    reducers: {
        setScrollPosition: (state, { payload }:PayloadAction<{path:string, position:number}>) => {
            state.scroll[payload.path] = payload.position;
        },
    },
});

export const { reducer: scrollSaveReducer, actions: scrollSaveActions } = ScrollSaveSlice;
