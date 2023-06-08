import { useSelector } from "react-redux";
import FormattedMessage from "./FormattedMessage";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setEn, setIt } from "../../js/store/translations";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.lang.lang);
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!open);
  }

  const clickIt = () => {
    setOpen(false);
    dispatch(setIt())
  }

  const clickEn = () => {
    setOpen(false);
    dispatch(setEn())
  }

  return <div className="language-selector" onClick={toggleOpen}>
      <p className="language-selector__lang">{lang}</p>
      {open && <div className="language-selector__dropdown" onMouseLeave={ () => setOpen(false)}>
        <p className="language-selector__item" onClick={ clickEn }>
          <FormattedMessage id="lang.en" />
        </p>
        <p className="language-selector__item" onClick={ clickIt }>
          <FormattedMessage id="lang.it" />
        </p>
      </div>}
    </div>;
};

export default LanguageSelector;
