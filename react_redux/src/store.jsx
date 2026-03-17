import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import sizeReducer from './sizeSlice';

//store 에 등록
// slice별로 state가 분리되어있지만 하나의 store에서 관리
const store = configureStore({
     reducer:{
        counter : counterReducer, // state.counter
        sizer : sizeReducer //state.sizer
        }
    }
   );

export default store;