import { memo } from "react";

import { MediaProps } from "./types";

import styles from "./styles.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default memo(function Media({ data }: MediaProps): JSX.Element {
  return (
    <div className={styles.item}>
      <div>
        <img
          src={data.posterImage.small || "https://via.placeholder.com/150"}
          alt="placeholder"
        />
        <div className={styles.percent}>
          <CircularProgressbar
            value={parseFloat(data.averageRating)}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#081c22",
              pathColor:
                parseFloat(data.averageRating) > 70 ? "#20c574" : "#d0d331",
              trailColor: "transparent",
            })}
          />
          <span>{(parseFloat(data.averageRating) / 10).toFixed(1)}</span>
        </div>
      </div>
      <div className="media__content">
        <h3 className="media__title">{data.name}</h3>
      </div>
    </div>
  );
});
