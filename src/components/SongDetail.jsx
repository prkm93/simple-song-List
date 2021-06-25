import React from 'react';
import {connect} from 'react-redux';

const SongDetail= ({song}) => {
    return (
        <div>
            {
                song && (<>
                    <h3>Details for:{song.title}</h3>
                    <p>
                        Title: {song.title}
                        <br/>
                        Duration: {song.duration} 
                    </p>
                </>)
             }
        </div>
    )
}

const mapStateToProps = (state) => {
    console.log("state", state);
      return {
          song: state.selectedSong
      }
}

export default connect(mapStateToProps)(SongDetail);
