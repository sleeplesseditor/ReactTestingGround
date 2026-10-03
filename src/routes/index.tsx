import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";
import parse from "html-react-parser";

export const Route = createFileRoute('/')({
    component: RouteComponent
});

const pageCards = [
    {
        "description": "lets you animate a component tree with Transitions and Suspense.",
        "link": "/viewTransition",
        "name": "viewTransition"
    },
        {
        "description": `allows you to attach refs directly to <pre><code>&lt;Fragment&gt;</code></pre> to manage DOM element groups`,
        "link": "/fragmentRefs",
        "name": "Fragment Refs"
    }
]

function RouteComponent() {
    const navigate = useNavigate();

    const handleLinkClick = (link: string) => navigate({ to: link });

    const options = {
        replace: (domNode: any) => {
            console.log('DOM', domNode)
            // Check if the current node is an element and has the target tag name
            if (domNode.type === 'tag' && domNode.name === 'fragment') {
                return '<></>';
            } else {
                return domNode
            }
        }
        };

    return (
        <div className="page-container">
            <div className="main-page__container">
                <div className="menu-card__container">
                    {pageCards.map((cards) => {
                        return (
                            <div 
                                className="menu-card__item" 
                                key={cards.link} 
                                onClick={() => handleLinkClick(cards.link)}
                            >
                                <h3>{cards.name}</h3>
                                <p>{parse(cards.description)}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}