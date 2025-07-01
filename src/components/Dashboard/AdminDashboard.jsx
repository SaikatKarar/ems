import React from "react";
import CreateTask from "../other/CreateTask";
import Header from './../other/Header';
import AllTask from "../other/AllTask";

function AdminDashboard() {
    return (
        <>
            <Header />
            <CreateTask />
            <AllTask />
        </>
    );
}

export default AdminDashboard;
