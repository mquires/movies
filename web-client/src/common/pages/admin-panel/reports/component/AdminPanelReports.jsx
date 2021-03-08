import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import ReportItem from '../../../../components/report-item';
import EmptyListMessage from '../../../../components/empty-list-message';

import './admin-panel-reports.scss';

const AdminPanelReports = (props) => {
  const {
    reports
  } = props;

  const reportsList = reports.map((report, index) => (
    <ReportItem
      id={report.id}
      key={index}
      className="admin-panel-reports__item"
      name={report.name}
      UserId={report.UserId}
      report={report.report}
      createdAt={report.createdAt}
    />
  ));

  return (
    <AdminPanel className="admin-panel-reports">
      {reportsList.length === 0 ? <EmptyListMessage /> : reportsList}
    </AdminPanel>
  );
};

export default AdminPanelReports;