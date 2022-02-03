// redux_word.js
import {db} from '../../firebase';
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { async, CONSTANTS } from '@firebase/util';

// Actions
const LOAD = "redux_word/LOAD";
const CREATE = "redux_word/CREATE";
const UPDATE = "redux_word/UPDATE";
const DELETE = "redux_word/DELETE";

const initialState = {
    word: [],
};

// Action Creators
export function loadWord(word_list){   //  가져오기 액션 생성
    return {type: LOAD, word_list};
}

export function createWord(redux_word){   //  생성 액션 생성
    return {type: CREATE, redux_word};
}

export function updateWord(redux_word){   //  업데이트 액션 생성
    return {type: UPDATE, redux_word};
}

export function deleteWord(word_list){   //  삭제 액션 생성
    return {type: DELETE, word_list};
}

//미들웨어
export const loadWordFB = () => {
    return async function(dispatch){
        const word_data = await getDocs(collection(db, "word"));
        // console.log(word_data)

        let word_list =[];

        word_data.forEach((w) => {
            // console.log(w);
            word_list.push({...w.data()})
        });
        // console.log(word_list)
        dispatch(loadWord(word_list));
    }
};

export const addWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "word"), word);
        const _word = await getDoc(docRef);
        const word_data = {id: _word.id, ..._word.data()}
        dispatch(createWord(word_data));
    }
};





// Reducer
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case "redux_word/LOAD" : {
            return {word : action.word_list}
        }
        case "redux_word/CREATE": {
            const new_word = [...state.word, action.redux_word];
            console.log(new_word);
            return {word : new_word};
        }
    // do reducer stuff
    default: return state;
    }
    }
