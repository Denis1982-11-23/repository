import React from "react";
import { Link, Outlet, NavLink, useLoaderData } from "react-router-dom";
import { getHostVans } from "../../../api";
import { requireAuth } from "../../../Utils";
import "./HostVanDetail.css";

export async function loader({ params, request }) {
  await requireAuth(request);
  return getHostVans(params.id);
}

function HostVansDetail() {
  const currentVan = useLoaderData();

  const activeStyles = {
    fontweight: "bold",
    color: "black",
    textDecoration: "underline",
  };

  return (
    <section>
      <Link to=".." relative="path" className="back-button">
        &larr; <span>Back to all vans</span>
      </Link>

      <div className="host-van-detail-layout-container">
        <div className="host-van-detail">
          <img src={currentVan.imageUrl} alt="van" />
          <div className="host-van-detail-info-text">
            <i className={`van-type van-type-${currentVan.type}`}>
              {currentVan.type}
            </i>
            <h3>{currentVan.name}</h3>
            <h4>${currentVan.price}/day</h4>
          </div>
        </div>
        <nav className="host-van-detail-nav">
          <NavLink
            to="."
            end
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Details
          </NavLink>
          <NavLink
            to="pricing"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Pricing
          </NavLink>
          <NavLink
            to="photos"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            Photos
          </NavLink>
        </nav>
        <Outlet context={{ currentVan }} />
      </div>
    </section>
  );
}

export default HostVansDetail;
