const Button = ({title, className, icon, clickFn}) => {
    return <button className={className} onClick={clickFn}>{title}{icon}</button>
}

export default Button;