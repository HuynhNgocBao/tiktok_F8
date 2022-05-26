import styles from './AccountItem.module.scss'
import classNames from 'classnames';
const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')}
    </div>;
}

export default AccountItem;