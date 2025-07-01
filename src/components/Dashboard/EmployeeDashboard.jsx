import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

function EmployeeDashboard() {
  return (
    <div>
      <Header />
      <TaskListNumbers />
      <TaskList />
    </div>
  )
}

export default EmployeeDashboard