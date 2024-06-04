import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_admin_client } from "../../redux/actions/adminAction";
import Swal from "sweetalert2";
import { ClipLoader } from "react-spinners";

const ClientProfile = () => {
  const { clientDetails } = useSelector((state) => state.adminReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get_admin_client());
  }, []);

  const [editableClientDetails, setEditableClientDetails] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    console.log("Client details:", clientDetails);
    if (clientDetails) {
      setEditableClientDetails({
        fullName: clientDetails.fullName,
        email: clientDetails.email,
        phoneNumber: clientDetails.phoneNumber,
        address: clientDetails.address,
      });
    }
  }, [clientDetails]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableClientDetails((prev) => ({ ...prev, [name]: value }));
  };

  const updateProfile = () => {
    // Ajoutez votre logique de mise à jour de profil ici
  };

  const [loading, setLoading] = useState(false);

  return (
    <div id="content">
      <div className="content-admin-main">
        <div className="aon-admin-heading">
          <h4>Edit Profile</h4>
        </div>
        <div className="card aon-card">
          <div className="card-header aon-card-header">
            <h4>
              <i className="fa fa-user" /> About me
            </h4>
          </div>
          <div className="card-body aon-card-body">
            <div className="row">
              <div className="col-xl-6">
                <div className="aon-staff-avtar">
                  <div className="aon-staff-avtar-header">
                    <div className="aon-pro-avtar-pic ">
                      <img src={clientDetails?.avatar} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Full Name</label>
                      <div className="aon-inputicon-box">
                        <input
                          className="form-control sf-form-control"
                          name="fullName"
                          value={editableClientDetails.fullName}
                          onChange={handleChange}
                          type="text"
                        />
                        <i className="aon-input-icon fa fa-user" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label>Email</label>
                      <div className="aon-inputicon-box">
                        <input
                          className="form-control sf-form-control"
                          name="email"
                          value={editableClientDetails.email}
                          onChange={handleChange}
                          type="text"
                        />
                        <i className="aon-input-icon fa fa-building-o" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>Mobile</label>
                      <div className="aon-inputicon-box">
                        <input
                          className="form-control sf-form-control"
                          name="phoneNumber"
                          type="number"
                          value={editableClientDetails.phoneNumber}
                          onChange={handleChange}
                        />
                        <i className="aon-input-icon fa fa-phone" />
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-group">
                      <label>address</label>
                      <div className="editer-wrap">
                        <div className="editer-textarea">
                          <textarea
                            className="form-control"
                            onChange={handleChange}
                            value={editableClientDetails.address}
                            name="address"
                            rows={4}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <button
              className="btn btn-primary btn-lg d-flex "
              style={{ margin: "0 0 0 auto" }}
              onClick={updateProfile}
            >
              {loading ? <ClipLoader color="#fff" size={20} /> : "Save"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientProfile;
