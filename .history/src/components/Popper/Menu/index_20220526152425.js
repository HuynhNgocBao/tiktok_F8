import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Menu([]) {
    return <Tippy
    interactive
    visible
    placement='bottom-end'
    render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                <AccountItem />
            </PopperWrapper>
        </div>
    )}>
        <button className={cx('more-btn')}>
            <FontAwesomeIcon icon={faEllipsisVertical}/>
        </button>
    </Tippy>;
}

export default Menu;