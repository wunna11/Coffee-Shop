import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import coffeeReducer from '../features/coffeeSlice';
import cartReducer from '../features/cartSlice';
import orderReducer from '../features/orderSlice';
import authReducer from '../features/Auth/authSlice';

export const store = configureStore({
    reducer: {
        coffee: coffeeReducer,
        cart: cartReducer,
        order: orderReducer,
        auth: authReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
