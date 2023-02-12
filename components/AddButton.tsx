import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompactDisc } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/AddButton.module.css";

export const AddButton = () => {
  return (
    <div className={styles.add_button}>
      <FontAwesomeIcon className={styles.icon} icon={faCompactDisc} />
      Add album
    </div>
  );
};
