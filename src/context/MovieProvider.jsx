import { createContext, useState } from "react";


import Modal from 'react-modal';

import YouTube from 'react-youtube';


const opts = {
    height: '390',
    width: '640',
    playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
    },
};

const MovieContext = createContext();

const MovieProvider = ({ children }) => {
    const [modalIsOpen, setModelIsOpen] = useState(false);
    const [trailerKey, setTrailerKey] = useState('');

    const handleTrailer = async (id) => {
        setTrailerKey('');
        try {
            const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
                }
            };
            const res = await fetch(url, options);
            const data = await res.json();
            setTrailerKey(data.results[0].key);
            setModelIsOpen(true);
        } catch (error) {
            setModelIsOpen(false);
        }
    }

    return (
        <MovieContext.Provider value={{ handleTrailer }}>
            {children}
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() => setModelIsOpen(false)}
                style={{
                    content: {
                        top: '50%',
                        left: '50%',
                        right: 'auto',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                    },
                    overlay: {
                        position: "fixed",
                        zIndex: "9999"
                    }
                }}

                contentLabel="Example Modal"
            >
                <YouTube videoId={trailerKey} opts={opts} />;
            </Modal>
        </MovieContext.Provider>
    )
}

export { MovieProvider, MovieContext };