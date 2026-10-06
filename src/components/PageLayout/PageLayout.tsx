import { ViewTransition } from "react";
import './PageLayout.scss';

interface IProps {
    children: React.ReactNode;
}

function PageLayout({ children }: IProps) {
  return (
    <ViewTransition>
      <main className="main-page__transition-content">
        {children}
      </main>
    </ViewTransition>
  );
}

export default PageLayout;