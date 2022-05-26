import classNames from 'classnames/bind';
import styles from './Header.module.scss'
const cx = classNames.bind(styles)
function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
            <svg height="42" width="118" alt="TikTok"><use xlink:href="#svg-header-logo"></use></svg>
            </div>
        </div>
    </header>;
}

export default Header;