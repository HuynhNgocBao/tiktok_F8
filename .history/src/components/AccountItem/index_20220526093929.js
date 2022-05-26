import styles from './AccountItem.module.scss'
import classNames from 'classnames';
const cx = classNames.bind(styles);
function AccountItem() {
    return <div className={cx('wrapper')}>
        <img className={cx('avatar')} alt="aaa"/>
        <div className={cx('info')}>aaaa</div>
    </div>;
}

export default AccountItem;