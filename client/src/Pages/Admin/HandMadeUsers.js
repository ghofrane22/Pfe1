import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_admin_handmade } from "../../redux/actions/adminAction";

const HandMadeUsers = () => {
  const { handMadeUsers } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_admin_handmade());
  }, []);
  return (
    <div className="page-wraper">
      <div id="content">
        <div className="content-admin-main">
          <div className="aon-admin-heading">
            <h4>HandMade Users</h4>
          </div>
          <div className="card aon-card">
            <div className="card-body aon-card-body">
              {/* Week Tabs*/}
              <div className="sf-availability-times-tab m-b50">
                <div className="sf-custom-tabs sf-custom-new">
                  {/*Tabs*/}

                  {/*Tabs Content*/}
                  <div className="tab-content">
                    {/*Upcoming*/}
                    <div id="Upcoming" className="tab-pane active">
                      <div className="sf-tabs-content">
                        <div className="sf-bs-data-table">
                          <div className="table">
                            <div
                              id="DataTables_Table_0_wrapper"
                              className="dataTables_wrapper dt-bootstrap4 no-footer"
                            >
                              <div className="row"></div>
                              <div className="row">
                                <div className="col-sm-12">
                                  <table
                                    className="table table-striped table-bordered example-dt-table aon-booking-table dataTable no-footer"
                                    style={{ width: "100%" }}
                                    id="DataTables_Table_0"
                                  >
                                    <thead>
                                      <tr>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "515.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Full Name
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "235.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Email
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "172.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Phone Number
                                        </th>
                                        <th
                                          className="sorting"
                                          rowSpan={1}
                                          colSpan={1}
                                          style={{
                                            width: "172.2px",
                                            padding: "20px",
                                          }}
                                        >
                                          Job
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      {handMadeUsers
                                        ?.filter((el) => el.authorized)
                                        .map((el, index) => {
                                          return (
                                            <tr
                                              className={`${
                                                index / 2 === 0 ? "even" : "odd"
                                              }`}
                                            >
                                              <td
                                                style={{
                                                  padding: "20px",
                                                }}
                                              >
                                                {el.fullName}
                                              </td>
                                              <td
                                                style={{
                                                  padding: "20px",
                                                }}
                                              >
                                                {el.email}
                                              </td>
                                              <td
                                                style={{
                                                  padding: "20px",
                                                }}
                                              >
                                                {el.phoneNumber}
                                              </td>
                                              <td
                                                style={{
                                                  padding: "20px",
                                                }}
                                              >
                                                {el.job.jobName}
                                              </td>
                                            </tr>
                                          );
                                        })}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HandMadeUsers;
