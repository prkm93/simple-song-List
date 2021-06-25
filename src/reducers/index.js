import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        { title: 'tere bin', duration: '4:05'},
        { title: 'alvida', duration: '5:30' },
        { title: 'pal', duration: '3:50'},
        { title: 'kabira', duration: '4:30'}
    ]
}

const selectedSongReducer = (selectedSong= null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
} 

export default combineReducers({
     songs: songsReducer,
     selectedSong: selectedSongReducer
})