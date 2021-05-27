const { atom } = require("recoil");


const subjectsState = atom({
    key: 'subjectsState',
    default: [],
})

const topicsState = atom({
    key: 'topicsState',
    default: [],
})

const partState = atom({
	key: 'partState',
	default: {},
});
const sideNav = atom({
	key: 'sideNav',
	default: {},
});

const errorsState = atom({
    key: 'errorsState',
    default: '',
})

export { subjectsState, topicsState, partState, sideNav, errorsState }
