



/* configuracion del store de redux para la aplicacion se nececita importar configureStore,  */

import { configureStore } from "@reduxjs/toolkit";
import { uiSlice } from './';
import { candelarSlice } from './../store/calendar/calendarSlice';


export const store = configureStore({
    reducer: {
        
        ui: uiSlice.reducer,
        calendar: candelarSlice.reducer

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    })
    

});