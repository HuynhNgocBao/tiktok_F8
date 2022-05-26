import classNames from 'classnames/bind';
import styles from './Header.module.scss'
import images from '~/assets/images'
const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='tiktok'/>
            </div>
            <div className={cx('search')}
        </div>
    </header>;
}

export default Header;