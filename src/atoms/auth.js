import { atom } from 'recoil'

const userState = atom({
    key : 'userState',
    default: null,
    dangerouslyAllowMutability: true
})

const jwtState = atom({
    key : 'jwtState',
    default: null,
})

export { userState, jwtState }
