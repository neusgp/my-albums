import { Album } from "../types/albums";
import styles from "../styles/AlbumsList.module.css";

export const AlbumsList = ({ albums }: { albums: Album[] }) => {
  return (
    <div className={styles.list_container}>
      {albums.map((album) => {
        return (
          <div key={album.title} className={styles.list_item}>
            <img src={album.img} alt="CD image" className={styles.album_img} />
            <div className={styles.album_info}>
              <h3>{album.title}</h3>
              <p>{album.artist}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
