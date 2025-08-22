import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../PRovider/AuthProvider';
import useMyRequest from '../../Api/useMyRequest';
import MyRequestTable from '../../Components/Table/MyRequestTable';
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

const MyRequests = () => {

    const { MyRequestsPromise } = useMyRequest()
    const [requests, setRequests] = useState([]);
    const { user } = useContext(AuthContext)


    useEffect(() => {
        if (user?.email) {
            MyRequestsPromise().then((data) => {
                setRequests(data);
            });
        }
    }, [user, MyRequestsPromise]);




    return (
        <div className='my-15 mx-auto w-11/12 px-4'>
            <div className="overflow-x-auto border rounded-lg shadow-xl">
                <Table className="w-full bg-secondary-content border-0   text-left custom-table">
                    <Thead className="bg-gray-100">
                        <Tr className=" text-sm text-gray-700 uppercase tracking-wide">
                            <Th className="p-3 ">Donar Name</Th>
                            <Th className="p-3">Expire Date</Th>
                            <Th className="p-3">Pickup Location</Th>
                            <Th className="p-3">Request Date</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {requests?.map((Singlefood) => (
                            <MyRequestTable key={Singlefood._id}
                                Singlefood={Singlefood}></MyRequestTable>
                        ))}
                    </Tbody>
                </Table>
            </div>

        </div>
    );
};

export default MyRequests;