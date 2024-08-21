import React from 'react'
import AddUser from "../../../components/user/AddUser"
import DashboardLayout from "../../../components/DashboardLayout"

function page() {
  return (
    <>
      <DashboardLayout>
        <AddUser/>
      </DashboardLayout>
    </>
  )
}

export default page