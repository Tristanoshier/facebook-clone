import { useEffect, useState } from 'react';
import { StoryReel } from './Stories/StoryReel';
import { MessageSender } from './MessageSender';
import { Post } from './Post';
import db from '../Firebase/firebase';

export const Feed = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection('posts')
            .orderBy('timeStamp', 'desc')
            .onSnapshot((snapshot) => {
                setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
            })
    }, [])

    return (
        <div className='feed'>
            <StoryReel />
            <MessageSender />
            {posts.map((post, index) => (
                <Post
                    key={index}
                    profilePic={post.data.profilePic}
                    message={post.data.message}
                    timestamp={post.data.timeStamp}
                    username={post.data.username}
                    image={post.data.image}
                />
            ))
            }
        </div>
    )
}
