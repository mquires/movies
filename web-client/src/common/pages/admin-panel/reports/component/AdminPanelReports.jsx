import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import ReportItem from '../../../../components/report-item';

import './admin-panel-reports.scss';

const AdminPanelReports = (props) => {
  const {
  
  } = props;

  return (
    <AdminPanel className="admin-panel-reports">
      <ReportItem name="123123" userName="username" report="report" />
    </AdminPanel>
  );
};

export default AdminPanelReports;