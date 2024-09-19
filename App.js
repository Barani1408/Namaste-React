// 

{/* <div id="parent">
    <div id="child">
        <h1>I'm an h1 tag</h1>
        <h2>I'm an h2 tag</h2>
    </div>
    <div id="child2">
        <h1></h1>
    </div>
</div> */}

// 


const heading = React.createElement("div", { id: "parent"}, [
    React.createElement("div", { id: "child"},[React.createElement("h1", {},"I am an H1 Tag"),React.createElement("h2", {},"I am an H2 Tag")]),
    React.createElement("div", { id: "child2"},[React.createElement("h1", {},"I am an H1 Tag"),React.createElement("h2", {},"I am an H2 Tag")])
]);

console.log(heading)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading)