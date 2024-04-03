/*
const heading = React.createElement("h1", { id: "heading" }, "Hello world from React!")
// console.log(heading)  // heading is ab object
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(heading) // render method willtake this object and convert it into h1 tag and  put in on DOM
*/

/*
<div id="parent">
<div id=" child">
    <h1>
        I'm h1 tag
    </h1>
</div>
</div> */

//creating nested html dom
const parent = React.createElement("div", { id: "parent" }, 
[React.createElement("div", { id: "child1" },[ 
React.createElement("h1", {}, "I'm h1 tag"),
React.createElement("h2", {}, "I'm h2 tag")
]),
React.createElement("div", { id: "child2" },[ 
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag")
    ])]
)
//it looks messy for more nested structures. so we will use (JSX)

// for having siblings you have to create an array of child
const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)
