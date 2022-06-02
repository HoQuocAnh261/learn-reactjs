import React from "react";
import styles from "./style.module.css";
import { FcNext, FcPrevious } from "react-icons/fc";
function ImageViewer() {
  const [image, setImage] = React.useState(1);
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className={styles.container}>
      <div className={styles.img_main}>
        <img alt="img" src={`/images/SlideState/${image}.jpg`} />
        <FcPrevious
          className={styles.icon}
          style={{
            left: 16,
          }}
          onClick={() => {
            if (image === 1) {
              setImage();
            }
            setImage(image - 1);
          }}
        />
        <FcNext
          className={styles.icon}
          style={{
            right: 16,
          }}
          onClick={() => {
            if (image === arr.length + 1) {
              setImage(1);
            }
            setImage(image + 1);
          }}
        />
      </div>
      <div className={styles.img_thumbnail}>
        <img alt="img" src="/images/SlideState/1.jpg" />
        <img alt="img" src="/images/SlideState/2.jpg" />
        <img alt="img" src="/images/SlideState/3.jpg" />
        <img alt="img" src="/images/SlideState/4.jpg" />
        <img alt="img" src="/images/SlideState/5.jpg" />
      </div>
    </div>
  );
}

export default ImageViewer;
