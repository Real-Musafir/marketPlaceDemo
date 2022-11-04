import NavBar from "./component/NavBar";
import styles from "../../styles/Home.module.css";
import BsLogo from "./assets/logoSemiWhite.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <NavBar />

      <div
        style={{
          backgroundImage: { BsLogo },
        }}
        className="flex"
      >
        <h1 className="text-9xl font-black italic">B</h1>
        <h1 className="text-9xl font-black italic">A</h1>
        <h1 className="text-9xl font-black italic">S</h1>
        <h1 className="text-9xl font-black italic">E</h1>
        <h1 className="text-9xl font-black italic">M</h1>
        <h1 className="text-9xl font-black italic">E</h1>
        <h1 className="text-9xl font-black italic">N</h1>
        <h1 className="text-9xl font-black italic">T</h1>
      </div>
    </div>
  );
}
