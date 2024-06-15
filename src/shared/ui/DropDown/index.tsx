import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames";

import style from "./DropDown.module.scss";

type DropDownProps = {
  title: string;
  items: {
    id: string;
    text: string;
    link?: string;
  }[];
  mods: string;
};

const DropDown = ({ title, items, mods }: DropDownProps) => {
  const [dropdownState, setDropdownState] = useState(false);
  const dropdownRef = useRef(null);

  const classes = classNames(style.dropdown, {
    [style.active]: dropdownState,
    [style.dropdown_white]: mods === "white",
  });

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !(dropdownRef.current as any).contains(event.target)
    ) {
      setDropdownState(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={style.dropdownWrapper}
    >
      <ul className={classes}>
        {items.map((el) => (
          <li
            key={el.id}
            className={style.dropdown__item}
          >
            {el.link ? (
              <Link
                to={el.link}
                onClick={() => setDropdownState(false)}
              >
                {el.text}
              </Link>
            ) : (
              el.text
            )}
          </li>
        ))}
      </ul>
      <button
        className={style.dropdown__button}
        onClick={handleDropdownClick}
        type="button"
      >
        {title}
      </button>
    </div>
  );
};

export default DropDown;
