import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../Navbar";
import styles from "./MainLayout.module.css";

interface MainLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <meta name="description" content="About Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};
