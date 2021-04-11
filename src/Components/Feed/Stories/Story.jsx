import { Avatar } from '@material-ui/core';

export const Story = ({ image, profileSrc, title}) => {
    return (
        <div style={{backgroundImage: `url(${image})`}} className='story'>
            <Avatar className='story-avatar' src={profileSrc} />
            <h4>{title}</h4>
        </div>
    )
}
