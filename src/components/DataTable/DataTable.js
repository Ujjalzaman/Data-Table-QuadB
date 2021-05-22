import React from 'react';
import './DataTable.css';
const DataTable = () => {
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
                        <td>BTC/INR</td>
                        <td>$2587560</td>
                        <td>$ 2,590518</td>
                        <td>286.1729</td>
                        <td>btc</td>
                    </tr>

                    <tr>
                        <td>1</td>
                        <td>BTC/INR</td>
                        <td>$2587560</td>
                        <td>$ 2,590518</td>
                        <td>286.1729</td>
                        <td>btc</td>
                    </tr>
                </tbody>
            </table>

        </div>
    );
};

export default DataTable;