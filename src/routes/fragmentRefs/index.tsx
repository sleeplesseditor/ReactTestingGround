import * as React from 'react';
import { createFileRoute } from '@tanstack/react-router';
import './fragmentRefs.scss';
import InView from '@helpers/InView';

export const Route = createFileRoute('/fragmentRefs/')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isVisible, setIsVisible] = React.useState(true);

  return (
    <div className="page-container">
      <div className="demo-container">
          <h3 className="demo-header">Fragment Refs</h3>
          <div className="fragment-refs__grid">
            <div className="fragment-refs-container">
                <div className={isVisible ? 'page visible' : 'page'}>
                <div className="filler">
                  <p>Scroll down</p>
                </div>

                <InView onChange={setIsVisible}>
                  <div className="card">{"First section"}</div>
                  <div className="card">{"Second section"}</div>
                </InView>

                <div className="filler">
                  <p>Scroll up</p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
