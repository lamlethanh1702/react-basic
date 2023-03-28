const initState = {
    users: [
        {
            id: 1,
            name: 'John',
        },

        {
            id: 2,
            name: 'Lamle',
        },
        {
            id: 3,
            name: 'Luke',
        },
    ],
    posts: [],
};

const rootReducer = (state = initState, action) => {
    switch (action.type) {
        case 'DELETE_USER':
            console.log('>>> run into delete user ', action);

            let users = [...state.users];
            users = users.filter((item) => item.id !== action.payload.id);
            console.log('>>> Check user ', users);
            return {
                ...state,
                users,
            };
        case 'CREATE_USER':
            let id = Math.floor(Math.random() * 100000);
            let user = { id: id, name: `random - ${id}` };
            return {
                ...state,
                users: [...state.users, user],
            };
        default:
            return state;
    }
};

export default rootReducer;
