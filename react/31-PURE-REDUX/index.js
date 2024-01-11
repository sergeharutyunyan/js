import store from "./redux/store.js";
// import getCurrentTime from "./utils/getCurrentTime.js";
import {addCurrentTime, clearTimes} from "./redux/actionCreators.js";

const addTime = document.getElementById('addTime');

addTime.addEventListener('click', ()=> store.dispatch(addCurrentTime())
/*{
    store.dispatch({
        type: 'ADD_CURRENT_TIME',
        payload : getCurrentTime()
    })
}*/
)

const clearTimesBtn = document.getElementById('clearTimes');

clearTimesBtn.addEventListener('click', ()=> store.dispatch(clearTimes())
/*{
    store.dispatch({
        type: 'CLEAR_ALL_TIMES',
    })
}*/
)

const timesList = document.getElementById('timesList');

store.subscribe(()=>{
    timesList.innerHTML = ''
    const times = store.getState()
    times.forEach((time)=>{
        let li = document.createElement('li')
        li.innerText = time
        timesList.appendChild(li)
    })
})

/*
// console.log(store.getState());

const unsubscribe = store.subscribe(()=> console.log(`Redux store just changed! ${store.getState()}`));

store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: '11:30:00'
});
unsubscribe();
// console.log(store.getState());

store.dispatch({
    type: 'ADD_CURRENT_TIME',
    payload: '11:32:00'
});
// console.log(store.getState());
store.dispatch({
    type: 'CLEAR_ALL_TIMES',
});
// console.log(store.getState());
*/
