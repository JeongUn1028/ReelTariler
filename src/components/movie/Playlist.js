import React from 'react';
import { useState } from 'react';
import { apiKey, PLAYLISTS, YOUTUBEURL } from '../../API/apis';
import { useEffect } from 'react';

const Playlist = () => {
    const [loading, setLoading] = useState(true);
    const [plist, setPlist] = useState([]);

    const getPlaylist = async () => {
        const json = await(
            await fetch(
                `${YOUTUBEURL}${PLAYLISTS}?key=${apiKey}&part=snippet`
            )
        ).json();
        setPlist(json.items);
        setLoading(false);
    }

    useEffect(() => {
        getPlaylist();
    },[]);

    return (
        <div>
            {loading ? <h1>Loading...</h1> : null}
        </div>
    );
};

export default Playlist;