import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({to, href,children,onClick}) {
    let Comp = 'button';
    return <Comp classNames=>
        <span>{children}</span>
    </Comp>;
}

export default Button;