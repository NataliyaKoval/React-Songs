import {combineReducers} from 'redux';

const songsReducer = () => {
    return [
        {
            title: 'Indestructible';
            duration: 4.38
        },
        {
            title: 'Immortalized';
            duration: 4.18
        },
        {
            title: 'What Are You Waiting For';
            duration: 4.04
        },
        {
            title: 'Down With The Sickness';
            duration: 4.38
        }
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})