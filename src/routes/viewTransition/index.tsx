import { createFileRoute } from '@tanstack/react-router';
import { ViewTransition, useState, startTransition } from 'react';
import { PlusIcon, MinusIcon } from '@phosphor-icons/react';
import './viewTransition.scss';

export const Route = createFileRoute('/viewTransition/')({
  component: RouteComponent,
})

function RouteComponent() {
    const [showItem, setShowItem] = useState(false);

    return (
        <div className="page-container">
            <div className="demo-container">
                <h3 className="demo-header">ViewTransition</h3>
                <div className="view-transition-container">
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
                    {showItem && (
                        <ViewTransition>
                            <div className="view-transition-card">
                                <div className="view-transition-card__square"></div>
                                <div className="view-transition-card__text">
                                    <h3>Card</h3>
                                    <p>lorem ipsum dolor sit amet consectetur adipiscing elit aute nisi veniam excepteur autem quo eligendi at fuga quo est id in voluptas adipiscing non irure duis ullamco at ut voluptas qui accusamus dignissimos eligendi rerum possimus omnis et quod elit quod dolor maxime expedita soluta in omnis id eligendi dolorem</p>
                                </div>
                            </div>
                        </ViewTransition>
                    )}
                </div>
            </div>
        </div>
    )
}
