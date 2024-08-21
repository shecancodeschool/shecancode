import React from 'react'
import ListUser from "../../../components/user/ListUser"
import DashboardLayout from "../../../components/DashboardLayout"

const page = () => {
  return (
    <>
      <DashboardLayout>
        <ListUser/>
      </DashboardLayout>
    </>
  )
}

export default page