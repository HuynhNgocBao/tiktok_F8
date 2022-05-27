import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Header({title,onBack}) {
    return <header className={cx('header')}>
        <button className={cx('back-btn')}
    </header>;
}

export default Header;