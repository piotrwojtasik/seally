import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import { MDBContainer } from "mdb-react-ui-kit";
import { MDBTypography } from "mdb-react-ui-kit";
import werka from "./werka.jpg";
import piter from "./piter.jpg";
import { useTranslation, Trans } from "react-i18next";

function Text() {
  const { t } = useTranslation();
  return (
    <MDBContainer className="my-5" id="team">
      <MDBTypography tag="div" className="display-1 pb-3 mb-3 text-center">
        {t("team")}
      </MDBTypography>
      <table className="table align-middle bg-white">
        <thead className="bg-light">
          <tr>
            <th>{t("name")}</th>
            <th>{t("title")}</th>
            <th className="d-none d-md-table-cell">Status</th>
            <th className="d-none d-md-block">LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={piter}
                  alt=""
                  style={{ width: 45, height: 45 }}
                  className="rounded-circle d-none d-md-table-cell "
                />

                <div className="ms-3">
                  <p className="fw-bold mb-1">Piotr Wojtasik</p>
                  <p className="text-muted mb-0">piotr.wojtasik@seally.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Founder</p>
              <p className="text-muted mb-0">Customer Service</p>
            </td>
            <td className="d-none d-md-table-cell">
              <span className="badge badge-success rounded-pill d-inline">
                {t("active")}
              </span>
            </td>

            <td className="d-none d-md-table-cell">
              <button
                type="button"
                className="btn btn-link btn-sm btn-rounded btn-sm fw-bold"
              >
                Click
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className="d-flex align-items-center">
                <img
                  src={werka}
                  alt=""
                  style={{ width: 45, height: 45 }}
                  className="rounded-circle d-none d-md-table-cell"
                />

                <div className="ms-3">
                  <p className="fw-bold mb-1">Weronika Ceynowa</p>
                  <p className="text-muted mb-0">weronika.ceynowa@seally.com</p>
                </div>
              </div>
            </td>
            <td>
              <p className="fw-normal mb-1">Co-Founder</p>
              <p className="text-muted mb-0">Quality Control Supervisor</p>
            </td>
            <td className="d-none d-md-table-cell">
              <span className="badge badge-success rounded-pill d-inline">
              {t("active")}
              </span>
            </td>

            <td className="d-none d-md-table-cell">
              <button
                type="button"
                className="btn btn-link btn-rounded btn-sm fw-bold"
                data-mdb-ripple-color="dark"
              >
                Click
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </MDBContainer>
  );
}

export default Text;
