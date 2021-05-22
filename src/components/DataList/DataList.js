import React from 'react';
import './DataList.css';
const DataList = (props) => {
    const {name, last, buy, sell, volume, base_unit} = props.data;
    // console.log("props data", props.data.btcinr.name)
    return (
        <div className="data-table">
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Last</th>
                        <th>Buy/Sell Price</th>
                        <th>Volume</th>
                        <th>Base_unit</th>
                    </tr>
                </thead>
                <tbody>
                  
                    <tr>
                        <td>1</td>
                        <td>{name}</td>
                        <td>$ {last}</td>
                        <td>$ {buy} / $ {sell}</td>
                        <td>{volume}</td>
                        <td>{base_unit}</td>
                    </tr>

                    {/* <tr>
                        <td>1</td>
                        <td>BTC/INR</td>
                        <td>$2587560</td>
                        <td>$ 2,590518</td>
                        <td>286.1729</td>
                        <td>btc</td>
                    </tr> */}
                </tbody>
            </table>

        </div>
    );
};

export default DataList;