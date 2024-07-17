import Image from "next/image";
import styles from "./page.module.css";
import { getAllCourses } from "./lib/api";
import Link from "next/link";
import { Course } from "./course";

export default function Home() {
  const items = getAllCourses()

  return (
    <main className={styles.main}>
      <div className={styles.row}>
        {items.map(elm =>
          <div key={elm.id}>
            <Link key={elm.id} href={`/courses/details/${elm.id}`} >
              <Course elm={elm} />
            </Link>

            <Link href={`/courses/edit/${elm.id}`}>
              <strong>EDIT</strong>
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
