import React from 'react';
import {connect} from 'react-redux';
import { selectSong } from '../actions';

const SongList =(props) => {

    const {songs} = props;
    const renderList = () => {
        return songs && songs.length && songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated item">
                        <div className="ui button primary" onClick={() => props.selectSong(song)}>Select</div>
                    </div>

                    <div className="content">{song.title}</div>
                </div>
            )
        })
    }

    return (
        <div className="ui divided list">
            {console.log("props", props)}
            {renderList()}
        </div>
    )
}

// All states defined in reducers are converted to props basically.
// Object returned from mapStatetoProps is going to be showed as props 
// inside of Component



const mapStateToProps = state => {
    //  console.log("state", state);
     return { songs: state.songs};
}

// Connect function automatically calls the action creator, it automatically takes the action 
// that gets returned and automatically calls the dispatch function.

export default connect(mapStateToProps, {selectSong})(SongList);
