import React, { Component, Fragment } from 'react'

export default class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: '',
            materialFee: '',
            packingFee: '',
            unpackingFee: '',
            inputFields: []
            // inputFields: [{ item: '', materialFee: '', packingFee: '', unpackingFee: '' }]
        }
    }

    onSelectChange = (e, index) => {
        e.persist();
        this.setState(() => ({ item: e.target.value }));
    }

    onChange = (e, index) => {
        e.persist();

        console.log(index);

        let values = [...this.state.inputFields];

        if(e.target.name === 'materialFee') {
            // if(index == e.target.id) {
                values[index].materialFee = e.target.value;
                this.setState(() => ({ materialFee: e.target.value }));
            // }
        } else if(e.target.name === 'packingFee') {
            values[index].packingFee = e.target.value;
            this.setState(() => ({ packingFee: e.target.value }));
        } else if(e.target.name === 'unpackingFee') {
            values[index].unpackingFee = e.target.value;
            this.setState(() => ({ unpackingFee: e.target.value }));
        } else {
            return;
        }

        console.log(values);

        this.setState(() => ({ inputFields: values }));
    }

    onAddHandler = (e, index) => {
        e.preventDefault();
        let values = [...this.state.inputFields]
        values.push({ item: this.state.item, materialFee: this.state.materialFee, packingFee: this.state.packingFee, unpackingFee: this.state.unpackingFee })
        this.setState({ inputFields: values });
    }

    onDeleteHandler = (e, index) => {
        let values = [...this.state.inputFields];
        values.splice(index,1);
        this.setState(() => ({ inputFields: values }));
    }

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
                                            <select onChange={(e) => this.onSelectChange(e,index)}>
                                                <option value="">Select</option>
                                                <option name="item" value="A">A</option>
                                                <option name="item" value="B">B</option>
                                                <option name="item" value="C">C</option>
                                            </select>
                                        </td>
                                        <td>
                                            <input id={index} type="text"  name="materialFee" value={`$`+this.state.materialFee} onChange={(e) => this.onChange(e,index)} />
                                        </td>
                                        <td>
                                            <input type="text" name="packingFee" value={`$`+this.state.packingFee} onChange={(e) => this.onChange(e,index)} />
                                        </td>
                                        <td>
                                            <input type="text" name="unpackingFee" value={`$`+this.state.unpackingFee} onChange={(e) => this.onChange(e,index)} />
                                        </td>
                                        <td>
                                            <button key={index} onClick={(e) => this.onDeleteHandler(e,index)}>Delete Item</button>
                                        </td>
                                    </tr>
                                </Fragment>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={this.onAddHandler}>Add Item</button>
            </div>
        )
    }
}

function Header(props) {
    return <thead>
        <tr>
            {props.data.map((item, index) => {
                return <th key={index}>{item.name}</th>
            })}
        </tr>
    </thead>
}
