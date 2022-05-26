import styles from './Button.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

function Button({to, href,primary,children,onClick,...pass}) {
    let Comp = 'button';
    const props = {
        onClick
    };
    if (to){
        Comp = 'Link'
        props.to = to;
    }
    else if (href){
        Comp = 'a'
        props.href = href;
    }
    const classes = cx('wrapper');
    return <Comp className={classes} {...props}>
        <span>{children}</span>
    </Comp>;
}

export default Button;