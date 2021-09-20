import "./styles.scss";
import { Visibility } from "@material-ui/icons";
import { useSelector } from "react-redux";
// import avatar from "../../assets/images/cover1.png";

const WidgetSm = () => {
  const NewUsers = useSelector((state) => state.newUsers.users);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Users</span>
      <ul className="widgetSmList">
        {NewUsers.map((u) => {
          return (
            <li className="widgetSmListItem" key={u.id}>
              <img src={u.avatar} alt="avatar" className="widgetSmImage" />
              <div className="widgetSmUser">
                <span className="widgetSmUserName">
                  {u.username.length > 15
                    ? `${u.username.substr(0, 12)}...`
                    : u.username}
                </span>
                <span className="widgetSmUserJob">
                  {u.employment.title.length > 14
                    ? `${u.employment.title.substr(0, 14)}...`
                    : u.employment.title.length}
                </span>
              </div>
              <button className="widgetSmButton">
                <Visibility className="widgetSmIcon" />
                Display
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default WidgetSm;
