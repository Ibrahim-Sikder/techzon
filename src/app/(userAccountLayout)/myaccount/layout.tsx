import UserAccountSidebar from "@/components/UserAccount/Sidebar/UserAccountSidebar";
import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/Header/Header";
import Container from "@/components/ui/Container";
import { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Container className="">
        <div className="flex">
          <UserAccountSidebar />
          {children}
        </div>
      </Container>
      <Footer />
    </div>
  );
};

export default layout;
