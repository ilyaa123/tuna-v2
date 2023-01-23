import classNames from "classnames";
import { Dispatch, FC, SetStateAction } from "react";

import style from './Select.module.scss';

interface SelectProps{
    active: boolean;
    setSearchValue: Dispatch<SetStateAction<string>>
}

export const Select:FC<SelectProps> = ({active, setSearchValue}) => {

    const handleOnClick = () => {
        console.log('Click')
        setSearchValue('Нижний новгород')
    }

    return (
        <div className={classNames(style.Select, {[style.Select_active]: active})}>
            <p onClick={handleOnClick} className={style.SelectItem}>Чебоксары</p>
            <p onClick={handleOnClick} className={style.SelectItem}>Чебоксары</p>
            <p onClick={handleOnClick} className={style.SelectItem}>Чебоксары</p>
            <p onClick={handleOnClick} className={style.SelectItem}>Чебоксары</p>
        </div>
    )
}