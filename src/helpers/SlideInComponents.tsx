import { addTransitionType, Fragment, ViewTransition, useState, startTransition } from 'react';
import { PlusIcon, MinusIcon } from '@phosphor-icons/react';
import Select from 'react-select';
import Card from '@components/Card/Card';

const options = [
    { value: 'none', label: 'None' },
    { value: 'vertical', label: 'Vertical' },
    { value: 'horizontal', label: 'Horizontal'}
];

interface OptionsType {
    value: string,
    label: string
}


const SlideInComponents = () => {
    const [showItem, setShowItem] = useState<boolean>(false);
    const [fadeInDirection, setFadeInDirection] = useState<OptionsType>(options[0]);
    const [transitionType, setTransitionType] = useState<string>('none');

    const changeValue = (e: any) => {
        setFadeInDirection(e);
        setTransitionType(e.value);
    };

    return (
        <Fragment>
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
                    <Card />
                </ViewTransition>
            )}
        </Fragment>
    )
}

export default SlideInComponents;