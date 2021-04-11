import { Avatar } from '@material-ui/core';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import NearMeIcon from '@material-ui/icons/NearMe';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';

export const Post = ({ profilePic, image, username, timestamp, message }) => {
    return (
        <div className='post'>
            <div className='post-top'>
                <Avatar 
                    src={profilePic}
                    className='post-avatar'
                 />
                 <div className='post-topInfo'>
                     <p>
                        <h3>{username}</h3>
                        <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                    </p>
                 </div>
            </div>
            <div className='post-bottom'>
                <p>{message}</p>
            </div>
            <div className='post-image'>
                {image != null ? <img src={image} /> : <></>}
            </div>
            <div className='post-options'>
                <div className='post-option'>
                    <ThumbUpIcon />
                    <p>Like</p>
                </div>
                <div className='post-option'>
                    <ChatBubbleIcon />
                    <p>Comment</p>
                </div>
                <div className='post-option'>
                    <NearMeIcon />
                    <p>Share</p>
                </div>
                <div className='post-option'>
                    <AccountCircleOutlinedIcon />
                    <ExpandMoreOutlinedIcon />
                </div>
            </div>
        </div>
    )
}
