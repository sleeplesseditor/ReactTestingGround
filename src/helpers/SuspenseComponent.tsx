import { ViewTransition, useState, startTransition, Suspense, use, Fragment } from 'react';
import { PlusIcon, MinusIcon } from '@phosphor-icons/react';
import Card from '@components/Card/Card';

function Thumbnail({video}: any) {
  return (
    <div
      aria-hidden="true"
      tabIndex={-1}
      className={`thumbnail ${video.image}`}
    />
  );
}

export function Video({video}: {video: any}): any {
  return (
    <div className="video">
      <div className="link">
        <Thumbnail video={video} />
        <div className="info">
          <div className="video-title">{video.title}</div>
          <div className="video-description">{video.description}</div>
        </div>
      </div>
    </div>
  );
}

export function VideoPlaceholder() {
  const video = {image: 'loading'};
  return (
    <div className="view-transition-card">
      <div className="view-transition-card__square loading"></div>
        <div className="view-transition-card__text loading-content">
            <div className="card-title loading" />
            <div className="card-description loading" />
        </div>
    </div>
  );
}

let cache: any = null;

function fetchVideo() {
  if (!cache) {
    cache = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: '1',
          title: 'First video',
          description: 'Video description',
          image: 'blue',
        });
      }, 2000);
    });
  }
  return cache;
}

export function useLazyVideoData() {
  return use(fetchVideo());
}


function LazyVideo() {
  const video = useLazyVideoData();
  return <Card />;
}

const SuspenseComponent = () => {
     const [showItem, setShowItem] = useState<boolean>(false);

    return (
        <Fragment>
            <button
                className="view-transition-btn"
                onClick={() => {
                    startTransition(() => {
                        setShowItem((prev) => !prev);
                    });
                }}
            >
                {showItem ? <MinusIcon weight="bold" /> : <PlusIcon weight="bold" />}
            </button>
            {showItem ? (
                <ViewTransition>
                    <Suspense fallback={<VideoPlaceholder />}>
                        <LazyVideo />
                    </Suspense>
                </ViewTransition>
            ) : null}
        </Fragment>
    )
}

export default SuspenseComponent;