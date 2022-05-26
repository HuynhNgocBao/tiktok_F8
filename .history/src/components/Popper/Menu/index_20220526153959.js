import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import styles from './Menu.module.scss';
import classNames from 'classnames/bind';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({children, items=[]}) {

    const renderItems = ()=>{
        return items.map((item,index)=>)
    }

    return <Tippy
    interactive
    visible
    placement='bottom-end'
    render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper>
                
                
            </PopperWrapper>
        </div>
    )}>
       {children}
    </Tippy>;
}

export default Menu;