const initialData = {
    allUserData: [],
    // data: []
}

const UserReducers = (state = initialData, action) => {
    switch (action.type) {
        case 'addUser': {
            const { id, data } = action.payload;
            return {
                ...state,
                allUserData: [
                    ...state.allUserData,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        }
        case 'deleteUser': {
            const filterdata = state.allUserData.filter((items) => items.id !== action.id)
            return {
                ...state,
                allUserData: filterdata
            }
        }

        default: return state;
    }
}

export default UserReducers;