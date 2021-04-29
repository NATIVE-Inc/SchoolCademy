const { atom, selector } = require("recoil");


const subjectsState = atom({
    key: 'subjectsState',
    default: [],
})

const topicsState = atom({
    key: 'topicsState',
    default: [],
})

const errorsState = atom({
    key: 'errorsState',
    default: '',
})

export { subjectsState, topicsState, errorsState }
