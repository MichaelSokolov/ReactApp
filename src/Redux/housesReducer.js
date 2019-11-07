const UPDATE_ADRESS_FIELD = 'UPDATE-ADRESS-FIELD';
const ADD_NEW_ITEM = 'ADD-NEW-ITEM';
const SET_ITEMS = 'SET-ITEMS';
const CHANGE_CURRENT_PAGE = 'CHANGE-CURRENT-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const SET_IS_FETCHING = 'SET-IS-FETCHING';


const initialState = {
    items: [],
    newAdressText: 'Add new adress',
    totalItemsCount: 0,
    currentPage: 1,
    pageSize: 10,
    currentDate: new Date().toJSON().slice(0,10),
    isFetching: false

}

const houseReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_ADRESS_FIELD:
            return {
                ...state,
                newAdressText: action.adress
            };
        case SET_ITEMS:
            return {
                ...state, items: [ ...action.items]
            };
        case CHANGE_CURRENT_PAGE:
            return {
                ...state, currentPage: action.page
            };
        case SET_TOTAL_COUNT:
            return {
                ...state, totalItemsCount: action.count
            };
        case SET_IS_FETCHING:
            return {
                ...state, isFetching: action.value
            };
        case ADD_NEW_ITEM:
            const id = state.items.length + 1;
            const newItem = {
                id: id,
                street: state.newAdressText,
                place: 1150,
                admin_region: 'Woluwe Sint Pierre',
                city: 'Brussels',
                price: 350000,
                type: 2,
                area: 60,
                floor: 1,
                year: 1960,
                alailable: '1 of october 2019',
                floor_numb: 'house',
                text: 'Three-bedroom duplex apartment with a surface area of about 100 m² consisting of a 46 m² living room, a 10 m² kitchen and a separate toilet. Upstairs three bedrooms of 11, 9 and 8 m² with integrated cupboards and a bathroom with WC. Close to all amenities : public transport, shops, school.',
                photo: ['https://static.immoweb.be/photos/0/8/3/0/5/2/2/5/8305225_2.jpg']
            }
            return {
                ...state,
                items: [...state.items, newItem],
                newAdressText: ''
            };
        default:
            return state
    }
}

export const onAdressChange = (text) => ({ type: UPDATE_ADRESS_FIELD, adress: text })
export const addComment = () => ({ type: ADD_NEW_ITEM })
export const setItems = (items) => ({ type: SET_ITEMS, items })
export const changeCurrentPage = (page) => ({ type: CHANGE_CURRENT_PAGE, page })
export const setTotalCount = (count) => ({ type: SET_TOTAL_COUNT, count })
export const setIsFetching = (value) => ({ type: SET_IS_FETCHING, value })

export default houseReducer