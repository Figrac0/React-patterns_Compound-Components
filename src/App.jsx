import Accordion from "./components/Accordion/Accordion";
import SearchableList from "./components/SearchableList/SearchableList";

import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./Place";

const PLACES = [
    {
        id: "african-savanna",
        image: savannaImg,
        title: "African Savanna",
        description: "Experience the beauty of nature.",
    },
    {
        id: "amazon-river",
        image: amazonImg,
        title: "Amazon River",
        description: "Get to know the largest river in the world.",
    },
    {
        id: "caribbean-beach",
        image: caribbeanImg,
        title: "Caribbean Beach",
        description: "Enjoy the sun and the beach.",
    },
    {
        id: "desert-dunes",
        image: desertImg,
        title: "Desert Dunes",
        description: "Discover the desert life.",
    },
    {
        id: "forest-waterfall",
        image: forestImg,
        title: "Forest Waterfall",
        description: "Listen to the sound of the water.",
    },
];

// текстовые пункты для поиска по debounce
const DEBOUNCE_FACTS = [
    {
        id: "debounce-delay",
        text: "Debounce delays a reaction to user input until the user stops typing for a specified time window.",
    },
    {
        id: "debounce-implementation",
        text: "In this project debounce is implemented with setTimeout and clearTimeout inside the handleChange function.",
    },
    {
        id: "debounce-expensive",
        text: "Debounce helps avoid running expensive operations like filtering or API requests on every single keystroke.",
    },
    {
        id: "debounce-last-change",
        text: "With debounce only the last change in a burst of typing will trigger the final action after the delay.",
    },
    {
        id: "debounce-vs-throttle",
        text: "Throttle limits the frequency of calls in time while debounce waits for silence before firing once.",
    },
    {
        id: "debounce-use-cases",
        text: "Debounce is useful for search inputs, auto complete fields and live validation that should not spam the system.",
    },
];

function App() {
    return (
        <>
            <main>
                <section>
                    <h2>React patterns in this project</h2>
                    <Accordion className="accordion">
                        <Accordion.Item
                            className="accordion-item"
                            id="compound-components">
                            <Accordion.Title className="accordion-item-title">
                                Compound components – idea
                            </Accordion.Title>
                            <Accordion.Content className="accordion-item-content">
                                <article>
                                    <p>
                                        The compound components pattern lets you
                                        build a single parent component that
                                        knows the state and exposes smaller
                                        child components that share this state.
                                    </p>
                                    <p>
                                        Instead of passing many props through a
                                        tree, the parent component provides a
                                        context. Children like Accordion.Item,
                                        Accordion.Title and Accordion.Content
                                        read everything they need from that
                                        context.
                                    </p>
                                    <p>
                                        This makes the API declarative. You
                                        write structure in JSX that describes
                                        what you want and the implementation
                                        inside the compound components takes
                                        care of how it works.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item
                            className="accordion-item"
                            id="compound-components-mechanics">
                            <Accordion.Title className="accordion-item-title">
                                Compound components – how it works here
                            </Accordion.Title>
                            <Accordion.Content className="accordion-item-content">
                                <article>
                                    <p>
                                        Accordion keeps the openItemId and the
                                        toggleItem function in a React context.
                                        It exposes Accordion.Item,
                                        Accordion.Title and Accordion.Content as
                                        static properties.
                                    </p>
                                    <p>
                                        Accordion.Item provides its own id to
                                        its children through a second context.
                                        Accordion.Title uses the item id and
                                        toggleItem to open or close the right
                                        panel when the user clicks.
                                    </p>
                                    <p>
                                        Accordion.Content reads the same item id
                                        and compares it with openItemId. If they
                                        match, it renders an open state, if not,
                                        it renders a closed state. All of this
                                        is wired by contexts, not by drilling
                                        props.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item
                            className="accordion-item"
                            id="render-props">
                            <Accordion.Title className="accordion-item-title">
                                Render props – idea
                            </Accordion.Title>
                            <Accordion.Content className="accordion-item-content">
                                <article>
                                    <p>
                                        The render props pattern lets a
                                        component delegate the way it renders
                                        items to a function that is passed as a
                                        child or as a prop.
                                    </p>
                                    <p>
                                        Instead of hard coding markup inside a
                                        reusable list, the list only controls
                                        logic such as filtering or sorting. The
                                        parent provides a function that receives
                                        the current item and returns JSX that
                                        describes how to display it.
                                    </p>
                                    <p>
                                        This keeps logic and presentation
                                        separated. The same list component can
                                        render cards, plain text rows or complex
                                        layouts just by changing the render
                                        function.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>

                        <Accordion.Item
                            className="accordion-item"
                            id="render-props-example">
                            <Accordion.Title className="accordion-item-title">
                                Render props – how it works in SearchableList
                            </Accordion.Title>
                            <Accordion.Content className="accordion-item-content">
                                <article>
                                    <p>
                                        SearchableList takes an items array and
                                        children treated as a render function.
                                        For each filtered item it calls this
                                        function to get the final JSX.
                                    </p>
                                    <p>
                                        With places you pass a render function
                                        that returns a Place component. With the
                                        second list you pass a function that
                                        just returns a string or a simple text
                                        node.
                                    </p>
                                    <p>
                                        The filtering logic, search term state
                                        and optional debounce live inside
                                        SearchableList, while the visual
                                        representation of each row is fully
                                        controlled by the parent through the
                                        render props pattern.
                                    </p>
                                </article>
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion>
                </section>

                <section>
                    <SearchableList
                        items={PLACES}
                        itemKeyFn={(item) => item.id}>
                        {(item) => <Place item={item} />}
                    </SearchableList>

                    <SearchableList
                        items={DEBOUNCE_FACTS}
                        itemKeyFn={(item) => item.id}>
                        {(item) => item.text}
                    </SearchableList>
                </section>
            </main>
        </>
    );
}

export default App;
