import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import FeedbackItem from '../../../../components/feedback-item';
import ReportItem from '../../../../components/report-item';
import SupportItem from '../../../../components/support-item/SupportItem';

const AdminPanelSupport = (props) => {
  const {
    supportList
  } = props;

  const supportItemList = supportList.map((supportItem, index) => (
    <SupportItem
      id={supportItem.id}
      key={index}
      className="admin-panel-reports__item"
      name={supportItem.name}
      problem={supportItem.problem}
      details={supportItem.details}
      createdAt={supportItem.createdAt}
    />
  ));

  return (
    <AdminPanel className="admin-panel-feedback">
      {supportItemList}
    </AdminPanel>
  );
};

export default AdminPanelSupport;