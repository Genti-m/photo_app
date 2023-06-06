import { setEn, setIt } from "../../js/store/translations";
import FormattedMessage from "../components/FormattedMessage";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();
  return <div>
    <FormattedMessage id='title' />
    <button onClick={ () => dispatch(setIt()) }>IT</button>
    <button onClick={ () => dispatch(setEn()) }>EN</button>
    </div>;
};

export default Home;
