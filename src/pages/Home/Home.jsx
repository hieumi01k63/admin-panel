import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import userApi from "../../api/userAPI";
import Chart from "../../components/Chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import WidgetLg from "../../components/WidgetLg/WidgetLg";
import WidgetSm from "../../components/WidgetSm/WidgetSm";
import data from "../../DummyData/data";
import { setFeaturedInfo } from "../../redux/actions/featuredInfoActions";
import { setNewUsers } from "../../redux/actions/userActions";
import "./styles.scss";

const Home = () => {
  const dispatch = useDispatch();

  const getNewFeaturedInfo = () => {
    dispatch(setFeaturedInfo());
  };

  const getNewUser = async () => {
    try {
      const res = await userApi.getNewUsers({ size: 7 });
      dispatch(setNewUsers(res));
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getNewFeaturedInfo();
    getNewUser();
  }, []);

  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        title="Sales Analytics"
        data={data}
        grid
        key1="Tshirt"
        key2="Shoes"
        key3="Jeans"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
