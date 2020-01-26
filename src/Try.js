function NumberedList(props) {
    const listItems = props.number.map((number) => {
        return <ListItem onClickHandle={props.onClickHandle} value={number} />
    });

    return (<ol>{listItems}</ol>);
};

function ListItem(props) {

    onClickHandle = () => {
        props.onClickHandle();
    };

    return (
        <div>
            <li key={props.value.toString}>{props.value}</li>
            <button onClick={onClickHandle}>Click Here</button>
        </div>
    );
};
