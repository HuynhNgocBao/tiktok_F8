import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({to, href,primary,children,onClick}) {
    let Comp = 'button';
    const props = [];
    if (to){
        props.to = to;
    }
    else if (href){}
    const classes = cx('wrapper');
    return <Comp className={classes}>
        <span>{children}</span>
    </Comp>;
}

export default Button;