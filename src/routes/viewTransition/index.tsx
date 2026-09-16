import { createFileRoute } from '@tanstack/react-router';
import { addTransitionType, ViewTransition, useState, startTransition } from 'react';
import { PlusIcon, MinusIcon } from '@phosphor-icons/react';
import Select from 'react-select';
import './viewTransition.scss';

export const Route = createFileRoute('/viewTransition/')({
  component: RouteComponent,
});

const options = [
    { value: 'none', label: 'None' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'horizontal', label: 'Horizontal'}
];

interface OptionsType {
    value: string,
    label: string
}

function RouteComponent() {
    const [showItem, setShowItem] = useState<boolean>(false);
    const [fadeInDirection, setFadeInDirection] = useState<OptionsType>(options[0]);
    const [transitionType, setTransitionType] = useState<string>('none');

    const changeValue = (e: any) => {
        console.log('e', e.value)
        setFadeInDirection(e);
        setTransitionType(e.value);
    };

    return (
        <div className="page-container">
            <div className="demo-container">
                <h3 className="demo-header">ViewTransition</h3>
                <div className="view-transition-container">
                    <div className="view-transition-interactions">
                        <Select 
                            className="direction-dropdown"
                            defaultValue={options[0]}
                            onChange={changeValue}
                            options={options}
                            placeholder="Select direction"
                            value={fadeInDirection}
                        />
                        <button
                            className="view-transition-btn"
                            onClick={() => {
                                startTransition(() => {
                                    addTransitionType(transitionType);
                                    setShowItem((prev) => !prev);
                                });
                            }}
                        >
                            {showItem ? <MinusIcon weight="bold" /> : <PlusIcon weight="bold" />}
                        </button>
                    </div>
                    {showItem && (
                        <ViewTransition
                            enter={{
                                'vertical': 'from-above',
                                'horizontal': 'from-left',
                                'none': 'auto',
                                'default': 'auto'
                            }}
                            exit={{
                                'vertical': 'to-below',
                                'horizontal': 'to-right',
                                'none': 'auto',
                                'default': 'auto'
                            }}
                            name="card-display-transition"
                            
                        >
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
