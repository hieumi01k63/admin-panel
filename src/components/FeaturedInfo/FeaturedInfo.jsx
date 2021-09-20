import React from "react";
import "./styles.scss";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { useSelector } from "react-redux";

const FeaturedInfo = () => {
  const dataFe = useSelector((state) => state.newFeaturedInfo.info);
  return (
    <div className="featured">
      {dataFe.map((dt, index) => {
        return (
          <div className="featuredItem" key={index}>
            <span className="featuredTitle">{dt.title}</span>
            <div className="featuredMoneyContainer">
              <span className="featuredMoney">${dt.amount}</span>
              <span className="featuredMoneyRate">
                {dt.volatility > 0 ? `+${dt.volatility}` : dt.volatility}{" "}
                {dt.volatility < 0 ? (
                  <ArrowDownward className="featuredIcon featuredIcon--negative" />
                ) : (
                  <ArrowUpward className="featuredIcon featuredIcon--positive" />
                )}
              </span>
            </div>
            <span className="featuredSub">{dt.subTitle}</span>
          </div>
        );
      })}
    </div>
  );
};

export default FeaturedInfo;
