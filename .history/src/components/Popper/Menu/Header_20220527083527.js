import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
const cx = classNames.bind(styles);

function Header({title,onBack}) {
    return <header className={cx('header')}>
        <button className={cx('back-btn')}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </button>
        <h4 className={cx('header-title')}
    </header>;
}

export default Header;