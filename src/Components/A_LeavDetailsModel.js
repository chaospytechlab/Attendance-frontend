// import React, { useEffect, useState } from 'react';
// import Modal from 'react-modal';
// import ReactPaginate from 'react-paginate';
// import '../Css/A_LeavDetailsModel.css';

// const A_LeaveDetailsModal = ({ isOpen, onRequestClose, leaveDetails }) => {
//     const [currentPage, setCurrentPage] = useState(0);
//     const itemsPerPage = 5;

//     useEffect(() => {
//         if (isOpen) {
//             document.body.style.overflow = 'hidden'; // Disable scrolling
//         } else {
//             document.body.style.overflow = ''; // Re-enable scrolling
//         }
//         return () => {
//             document.body.style.overflow = ''; // Clean up when component unmounts
//         };
//     }, [isOpen]);

//     const handlePageClick = (data) => {
//         setCurrentPage(data.selected);
//     };

//     const offset = currentPage * itemsPerPage;
//     const currentPageData = leaveDetails.slice(offset, offset + itemsPerPage);
//     const pageCount = Math.ceil(leaveDetails.length / itemsPerPage);

//     return (
//         <Modal
//             isOpen={isOpen}
//             onRequestClose={onRequestClose}
//             contentLabel="Pending Leave Request"
//             className="leave-details-modal"
//             overlayClassName="leave-details-modal-overlay"
//         >
//             <div className="A_LeavDetailsModel-modal-content">
//                 <h1>Pandding Leave Request</h1>
//                 {leaveDetails.length > 0 ? (
//                     <>
//                         <table className="A_LeavDetailsModel-leave-details-table">
//                             <thead>
//                                 <tr>
//                                     <th>Employee id</th>
//                                     <th>Employee name</th>
//                                     <th>Start Date</th>
//                                     <th>End Date</th>
//                                     <th>Reason for Leave</th>
//                                     <th>Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {currentPageData.map((leave) => (
//                                     <tr key={leave.id}>
//                                         <td>{leave.employeeId}</td>
//                                         <td>{leave.employeeName}</td>
//                                         <td>{leave.startDate}</td>
//                                         <td>{leave.endDate}</td>
//                                         <td>{leave.reason}</td>
//                                         <td>
//                                             <button className="A_LeavDetailsModel-reject-btn">Reject</button>
//                                             <button className="A_LeavDetailsModel-approve-btn">Approve</button>
//                                         </td>
//                                     </tr>
//                                 ))}
//                             </tbody>
//                         </table>
//                         <ReactPaginate
//                             previousLabel={'Previous'}
//                             nextLabel={'Next'}
//                             breakLabel={'...'}
//                             breakClassName={'break-me'}
//                             pageCount={pageCount}
//                             marginPagesDisplayed={2}
//                             pageRangeDisplayed={5}
//                             onPageChange={handlePageClick}
//                             containerClassName={'pagination'}
//                             activeClassName={'active'}
//                         />
//                     </>
//                 ) : (
//                     <p>No leave details available.</p>
//                 )}
//             </div>
//         </Modal>
//     );
// };

// export default A_LeaveDetailsModal;
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ReactPaginate from 'react-paginate';
import '../Css/A_LeavDetailsModel.css';

const A_LeaveDetailsModal = ({ isOpen, onRequestClose, leaveDetails, selectedStatus }) => {
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'; // Disable scrolling
        } else {
            document.body.style.overflow = ''; // Re-enable scrolling
        }
        return () => {
            document.body.style.overflow = ''; // Clean up when component unmounts
        };
    }, [isOpen]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
    };

    const offset = currentPage * itemsPerPage;
    const currentPageData = leaveDetails.slice(offset, offset + itemsPerPage);
    const pageCount = Math.ceil(leaveDetails.length / itemsPerPage);

    const getTitle = () => {
        switch (selectedStatus) {
            case 'pending':
                return 'Pending Leave Request';
            case 'approved':
                return 'Approved Leaves';
            case 'reject':
                return 'Rejected Leaves';
            default:
                return 'Leave Details';
        }
    };

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            contentLabel="Leave Details"
            className="leave-details-modal"
            overlayClassName="leave-details-modal-overlay"
        >
            <div className="A_LeavDetailsModel-modal-content">
                <h2>{getTitle()}</h2>
                {leaveDetails.length > 0 ? (
                    <>
                        <table className="A_LeavDetailsModel-leave-details-table">
                            <thead>
                                <tr>
                                    <th>Employee id</th>
                                    <th>Employee name</th>
                                    <th>Start Date</th>
                                    <th>End Date</th>
                                    <th>Reason for Leave</th>
                                    {selectedStatus === 'pending' && <th>Action</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {currentPageData.map((leave) => (
                                    <tr key={leave.id}>
                                        <td>{leave.employeeId}</td>
                                        <td>{leave.employeeName}</td>
                                        <td>{leave.startDate}</td>
                                        <td>{leave.endDate}</td>
                                        <td>{leave.reason}</td>
                                        {selectedStatus === 'pending' && (
                                            <td>
                                                <button className="A_LeavDetailsModel-reject-btn">Reject</button>
                                                <button className="A_LeavDetailsModel-approve-btn">Approve</button>
                                            </td>
                                        )}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        <ReactPaginate
                            previousLabel={'Previous'}
                            nextLabel={'Next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            pageCount={pageCount}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            onPageChange={handlePageClick}
                            containerClassName={'pagination'}
                            activeClassName={'active'}
                        />
                    </>
                ) : (
                    <p>No leave details available.</p>
                )}
            </div>
        </Modal>
    );
};

export default A_LeaveDetailsModal;
