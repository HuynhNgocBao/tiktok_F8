import { useState } from 'react';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, faCircleXmark, faKeyboard } from '@fortawesome/free-regular-svg-icons';
import { faEarthAsia, faEllipsisVertical, faLanguage, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon = {faEarthAsia}></FontAwesomeIcon>,
        title: 'English',
        children: {
            title: "Language",
            data: [
                {
                    type: "language",
                    code: "en",
                    title: "English",
                },
                {
                    type: "language",
                    code: "vn",
                    title: "Tieng Viet",
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon = {faCircleQuestion}></FontAwesomeIcon>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon = {faKeyboard}></FontAwesomeIcon>,
        title: 'Keyboard shortcuts'
    },
]

function Header() {
    const currentUser = true;
    const [searchResult, setSearchResult] = useState([1]);
    const handleChange = (data)=>{
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok" />
                <Tippy
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                {currentUser?{
                    <div>ahihi</div>
                }:
                    {
                    <div className={cx('action')}>
                    <Button text>Upload</Button>
                    <Button primary>
                        Log in
                    </Button>
                    <Menu items = {MENU_ITEMS} onChange={handleChange}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>}
                }
                
            </div>
        </header>
    );
}

export default Header;
