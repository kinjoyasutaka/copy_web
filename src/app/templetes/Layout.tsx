import { FC, ReactNode } from "react";
import Footer from "../organisms/layout/Footer";
import Header from "../organisms/layout/Header";

type Props = {
  children: ReactNode;
  title: string;
};

const Layout = (props: Props) => {
  const { title, children } = props;

  return (
    <>
      <Header title={title} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
