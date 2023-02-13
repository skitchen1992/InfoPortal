import {classNames} from "shared/lib/classNames";
import cls from "./Sidebar.module.scss"
import {FC, useState} from "react";
import {List} from "phosphor-react";

interface IProps {
    className?: string
}

export const SideBar: FC<IProps> = (props) => {
    const {className} = props

    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <div className={classNames(cls.root, {[cls.collapsed]: collapsed}, [className])}>
            <div className={classNames(cls.wrapBtn, {[cls.collapsed]: collapsed}, [className])}>
                <button onClick={onToggle}><List /></button>
            </div>
        </div>
    );
};
