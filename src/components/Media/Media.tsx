import { memo } from "react";
import Image from "next/image";

import { MediaProps } from "./types";

import styles from "./styles.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default memo(function Media({ data }: MediaProps): JSX.Element {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <Image
          loader={() =>
            data.attributes.posterImage.medium ??
            "https://via.placeholder.com/280x397?text=No+image"
          }
          src="media.jpg"
          alt={data.attributes.canonicalTitle}
          width={280}
          height={397}
        />
        {data.type && (
          <div className={styles.percent}>
            <CircularProgressbar
              value={parseFloat(data.attributes.averageRating)}
              background
              backgroundPadding={6}
              styles={buildStyles({
                backgroundColor: "#081c22",
                pathColor:
                  parseFloat(data.attributes.averageRating) > 70
                    ? "#20c574"
                    : "#d0d331",
                trailColor: "transparent",
              })}
            />
            <span>
              {(parseFloat(data.attributes.averageRating) / 10).toFixed(1)}
            </span>
          </div>
        )}
      </div>
      <div className="">
        <h3 className="">{data.attributes.canonicalTitle}</h3>
      </div>
    </div>
  );
});
