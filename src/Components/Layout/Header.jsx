import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontIcon from '@material-ui/icons/Storefront';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import { Avatar, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ForumIcon from '@material-ui/icons/Forum';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import { useStateValue } from '../../StateManagement/StateProvider';

export const Header = () => {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className='header'>
            <div className="header-left">
                <img src="https://1000logos.net/wp-content/uploads/2016/11/Facebook-logo.png" />
                <div className="header-input">
                    <SearchIcon />
                    <input placeholder="Search Facebook" type='text' />
                </div>
            </div>
            <div className="header-middle">
                <div className="header-option header-option--active">
                    <HomeIcon fontSize='large' />
                </div>
                <div className="header-option">
                    <FlagIcon fontSize='large' />
                </div>
                <div className="header-option">
                    <SubscriptionsIcon fontSize='large' />
                </div>
                <div className="header-option">
                    <StorefrontIcon fontSize='large' />
                </div>
                <div className="header-option">
                    <SupervisedUserCircleIcon fontSize='large' />
                </div>
            </div>
            <div className="header-right">
                <div className="header-info">
                    <Avatar src={user.photoURL} />
                    <h4>{user.displayName}</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>
                <IconButton>
                    <ForumIcon />
                </IconButton>
                <IconButton>
                    <NotificationsActiveIcon />
                </IconButton>
                <IconButton>
                    <ExpandMoreIcon />
                </IconButton>
            </div>

        </div>
    )
}
