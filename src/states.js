const { atom, selector } = require("recoil");


const subjectsState = atom({
    key: 'subjectsState',
    default: [],
})

const errorsState = atom({
    key: 'errorsState',
    default: '',
})

export { subjectsState, errorsState }
