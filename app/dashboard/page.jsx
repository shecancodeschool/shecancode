import React from 'react'
import DashboardLayout from "../../components/DashboardLayout"
// import AddUser from "../../components/user/AddUser"
import DashManagement from "../../components/DashManagement"

const page = () => {
  return (
    <>
      <DashboardLayout>
        <DashManagement/>
      </DashboardLayout>
    </>
  )
}

export default page