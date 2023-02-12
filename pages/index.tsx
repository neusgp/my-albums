import { AlbumsList } from "../components/AlbumsList";
import clientPromise from "../lib/mongodb";
import { Album } from "../types/albums";
import { Data } from "../types/data";
import Head from "next/head";
import { AddButton } from "../components/AddButton";
import styles from "../styles/Home.module.css"

export default function Home({ albums }: { albums: Album[] }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Inter:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div id="main">
        <div className={styles.title}>
          <h1>My Albums</h1>
          <AddButton />
        </div>

        <div>
          <AlbumsList albums={albums} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(): Promise<Data> {
  try {
    const client = await clientPromise;
    const db = client.db("music");

    const albums = await db
      .collection("my_albums")
      .find({})
      .sort({ metacritic: -1 })
      .limit(20)
      .toArray();
    if (albums) {
      return {
        props: { albums: JSON.parse(JSON.stringify(albums)) },
      };
    }
  } catch (e) {
    console.error(e);
  }
}
