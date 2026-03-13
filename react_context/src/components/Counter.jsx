import React, { useReducer } from 'react';

// 1. 리듀서 함수 정의 (상태 업데이트 로직)
function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        default:
            return state;
    }
}

export default function Counter() {
    // 2. useReducer 사용 (리듀서 함수와 초기 상태 전달)
    const [state, dispatch] = useReducer(reducer, { count: 0 });

    return (
        <div>
            <p>현재 카운트: {state.count}</p>
            {/* 3. dispatch를 통해 액션 전달 */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
            {/* RESET버튼 추가 -> 현재 상태값을 0으로 만든다 */}
            <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
        </div>
    );
}

