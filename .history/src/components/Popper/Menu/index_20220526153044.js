import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Menu({children}) {
    return <Tippy
    interactive
    visible
    placement='bottom-end'
    render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                <h4 className={cx('search-title')}>Account</h4>
                
            </PopperWrapper>
        </div>
    )}>
       {children}
    </Tippy>;
}

export default Menu;