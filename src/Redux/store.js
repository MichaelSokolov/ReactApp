import houseReducer from "./housesReducer";

let store = {
    _state: {
        houses: [
            {
                adress: 'rue ua Bois 520',
                postal: 1150,
                commune: 'Woluwe Sint Pierre',
                city: 'Brussels',
                price: 350000,
                bedromCount: 2,
                area: 60,
                floor: 1,
                year: 1960,
                alailable: '1 of october 2019',
                type: 'house',
                description: 'Three-bedroom duplex apartment with a surface area of about 100 m² consisting of a 46 m² living room, a 10 m² kitchen and a separate toilet. Upstairs three bedrooms of 11, 9 and 8 m² with integrated cupboards and a bathroom with WC. Close to all amenities : public transport, shops, school.',
                img: 'https://static.immoweb.be/photos/0/8/3/0/5/2/2/5/8305225_1.jpg',
                id: 1
            },
            {
                id: 2,
                adress: 'Voskapelstraat 1 box 3',
                postal: 1933,
                commune: null,
                city: 'Sterrebeek',
                price: 299000,
                bedromCount: 3,
                area: 95,
                flor: 3,
                year: 2002,
                alailable: 'Depending on the tenant',
                type: 'Duplex',
                description: 'Beau duplex situé dans le centre de Sterrebeek avec spacieux living, cuisine éq, au premier étage, 2 chambres à coucher et salle de bains avec baignoire, douche et 2 lavabos, débarras avec chauffage individuel, petite terrassel et cave.Loué actuellemen. idéal pour investisseur ou occupation personelle.',
                img: 'https://static.immoweb.be/photos/0/8/1/4/1/8/7/6/8141876_1.jpg'
            }
        ],
        newAdressText: 'Add new adress'
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('rerender tree');
    },
    subscriber(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
       this._state = houseReducer(this._state, action);
       this._callSubscriber()
    }
}

window.store = store;

export default store;
