import { useState } from 'react';
import VideocamIcon from '@material-ui/icons/Videocam';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import { Avatar } from '@material-ui/core';
import { useStateValue } from './StateProvider';
import db from '../Firebase/firebase';
import firebase from 'firebase';

export const MessageSender = () => {
    const [{ user }, dispatch] = useStateValue();
    const [input, setInput] = useState('');
    const [imageURL, setImageURL] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            message: input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            username: user.displayName,
            image: imageURL
        })
        setInput('');
        setImageURL('');
    }
    return (
        <div className='messageSender'>
            <div className='messageSender-top'>
                <Avatar src={user.photoURL} />
                <form>
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className='messageSender-input'
                        placeholder={`Whats on your mind, ${user.displayName}?`}
                    />
                    <input
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                        placeholder='image URL (Optional)'
                    />
                    <button onClick={handleSubmit} type='submit'>
                        Hidden submit
                    </button>
                </form>
            </div>
            <div className='messageSender-bottom'>
                <div className='messageSender-option'>
                    <VideocamIcon style={{ color: 'red' }} />
                    <h3>Live Video</h3>
                </div>
                <div className='messageSender-option'>
                    <PhotoLibraryIcon style={{ color: 'green' }} />
                    <h3>Photo/Video</h3>
                </div>
                <div className='messageSender-option'>
                    <InsertEmoticonIcon style={{ color: 'orange' }} />
                    <h3>Feeling/Activity</h3>
                </div>
            </div>
        </div>
    )
}
