import React from "react";
import MainLayout from "components/layout/component/main/MainLayout";
import AdminPanelContainer from "components/admin-panel/container/AdminPanelContainer";
const AdminPanelPage = () => {
  return (
    <>
      <MainLayout adminPanel>
        <AdminPanelContainer />
      </MainLayout>
    </>
  );
};
export default AdminPanelPage;
