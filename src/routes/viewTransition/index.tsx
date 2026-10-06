import { createFileRoute } from '@tanstack/react-router';
import SlideInComponents from '@helpers/SlideInComponents';
import SuspenseComponent from '@helpers/SuspenseComponent';
import './viewTransition.scss';
import PageLayout from '@components/PageLayout/PageLayout';

export const Route = createFileRoute('/viewTransition/')({
  component: RouteComponent,
});

function RouteComponent() {
    return (
        <PageLayout>
            <div className="page-container">
                <div className="demo-container">
                    <h3 className="demo-header">ViewTransition API</h3>
                    <div className="view-transition__grid">
                        <div className="view-transition-container">
                        <span>
                            <h3>Enter/Exit Animations</h3>
                        </span>
                        <SlideInComponents />
                    </div>
                        <div className="view-transition-container">
                            <span>
                                <h3>Suspense/Fallback UI</h3>
                            </span>
                            <SuspenseComponent />
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    )
}
