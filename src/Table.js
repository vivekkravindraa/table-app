import React, { Component, Fragment } from 'react';

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            materialFee: '',
            packingFee: '',
            unpackingFee: '',
            inputFields: []
        };
    };

    onSelectChange = (index, e) => {
        e.persist();
        this.setState(() => ({ item: e.target.value }));
    };

    onChange = (index, e) => {
        e.persist();

        let values = [...this.state.inputFields];

        let value = e.target.value.slice(1);

        if(e.target.name === 'materialFee') {
            values[index].materialFee = value;
        } else if(e.target.name === 'packingFee') {
            values[index].packingFee = value;
        } else if(e.target.name === 'unpackingFee') {
            values[index].unpackingFee = value;
        };

        this.setState(() => ({ inputFields: values }));
    };

    onAddHandler = (index, e) => {
        let values = [...this.state.inputFields];
        values.push({
            item: '',
            materialFee: '',
            packingFee: '',
            unpackingFee: ''
        });
        this.setState({ inputFields: values });
    };

    onDeleteHandler = (index, e) => {
        let values = [...this.state.inputFields];

        let filtered = values.filter((item, i) => {
            if(index !== i) {
                return item;
            };
        });

        this.setState(() => ({ inputFields: filtered }));
    };

    render() {
        let { inputFields } = this.state;

        return (
            <div>
                <table>
                    <Header data={this.props.data} />
                    <tbody>
                        {inputFields.map((field, index) => {
                            return (
                                <Fragment key={index}>
                                    <tr>
                                        <td>
                                            <select onChange={(e) => this.onSelectChange(index, e)}>
                                                <option value="">Select</option>
                                                <option name="item" value="A">A</option>
                                                <option name="item" value="B">B</option>
                                                <option name="item" value="C">C</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="materialFee"
                                                value={`$`+field.materialFee}
                                                onChange={(e) => this.onChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="packingFee"
                                                value={`$`+field.packingFee}
                                                onChange={(e) => this.onChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                name="unpackingFee"
                                                value={`$`+field.unpackingFee}
                                                onChange={(e) => this.onChange(index, e)}
                                            />
                                        </td>
                                        <td>
                                            <button
                                                key={index}
                                                onClick={(e) => this.onDeleteHandler(index, e)}
                                            >
                                                Delete Item
                                            </button>
                                        </td>
                                    </tr>
                                </Fragment>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={this.onAddHandler}>Add Item</button>
            </div>
        );
    };
};

function Header(props) {
    return <thead>
        <tr>
            {props.data.map((item, index) => {
                return <th key={index}>{item.name}</th>
            })}
        </tr>
    </thead>
};
