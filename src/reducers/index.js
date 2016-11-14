import { combineReducers } from 'redux'
import page from './page'
import user from './user'

//объединение редусеров
export default combineReducers({
    page,
    user
})