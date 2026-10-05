import * as React from 'react';

interface InViewProps {
    children: React.ReactNode;
    onChange: (isVisible: boolean) => void;
}

export default function InView({ onChange, children }: InViewProps) {
  const fragmentRef = React.useRef<React.FragmentInstance | null>(null);

  React.useLayoutEffect(() => {
    const visibleElements = new Set();
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    visibleElements.add(e.target);
                } else {
                    visibleElements.delete(e.target);
                }
            });
            onChange(visibleElements.size > 0);
        }
    );

    const fragmentInstance = fragmentRef.current;
    fragmentInstance?.observeUsing(observer);

    return () => {
        fragmentInstance?.unobserveUsing(observer);
    };
  }, [onChange]);

  return (
    <React.Fragment ref={fragmentRef}>
      {children}
    </React.Fragment>
  );
}