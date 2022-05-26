import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark } from '@fortawesome/free-regular-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok'/>
            </div>
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos'/>
                <button className={cx('clear')}>
                <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <button className={cx('search')}>

                </button>
            </div>
        </div>
    </header>;
}

export default Header;