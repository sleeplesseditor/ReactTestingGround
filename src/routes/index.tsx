import { createFileRoute } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

export const Route = createFileRoute('/')({
    component: RouteComponent
});

const pageCards = [
    {
        "description": "lets you animate a component tree with Transitions and Suspense.",
        "link": "/viewTransition",
        "name": "viewTransition"
    }
]

function RouteComponent() {
    const navigate = useNavigate();

    const handleLinkClick = (link: string) => navigate({ to: link });

    return (
        <div className="page-container">
            <div className="main-page__container">
                <div className="menu-card__container">
                    {pageCards.map((cards) => {
                        return (
                            <div className="menu-card__item" key={cards.link} onClick={() => handleLinkClick(cards.link)}>
                                <h3>{cards.name}</h3>
                                <p>{cards.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}