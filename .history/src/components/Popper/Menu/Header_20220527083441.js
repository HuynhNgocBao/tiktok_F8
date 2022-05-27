import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Header({title,onBack}) {
    return <header className={cx('header')}>
        <button className={cx('back-btn')}>
            <FontAwesomeIcon icon={faCher}
        </button>
    </header>;
}

export default Header;