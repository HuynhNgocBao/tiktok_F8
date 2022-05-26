import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({to, href,children,onClick}) {
    let Comp = 'button';
    const classes = 
    return <Comp className={cx('wrapper')}>
        <span>{children}</span>
    </Comp>;
}

export default Button;