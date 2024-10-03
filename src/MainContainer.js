function Container(props) {
    return (
        <div className="flex-1 h-full px-4 place-content-center ">
        {props.children}
        </div>
    );
}

export default Container;