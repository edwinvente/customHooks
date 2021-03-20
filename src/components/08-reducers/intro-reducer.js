const initialState = [{
    id: 1,
    todo: 'Comprar Pan',
    done: false
}]

const todoReducer = (state = initialState, action) => {

    if (action?.type === 'add') {
        return [...state, action.payload]
    }

    return state;
}

let todos = todoReducer();

const newTod = {
    id: 2,
    todo: 'Comprar Leche',
    done: false
}

const newData = {
    type: 'add',
    payload: newTod
}

todos = todoReducer(todos, newData);
console.log(todos)