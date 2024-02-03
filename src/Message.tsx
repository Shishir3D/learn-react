// Always use PascalCasing
function Message() {
    // This syntax is called JavaScript XML (JSX)
    let name = "Shishir"
    if (name == "Shishir"){
        return <h1>Hello {name}! This is my first react app.</h1>;
    }
    else return <h1>There is no name :/ </h1>
}

export default Message;