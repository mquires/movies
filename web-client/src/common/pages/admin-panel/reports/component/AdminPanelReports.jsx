import React from 'react';
import PropTypes from 'prop-types';

import AdminPanel from '../../component';
import FeedbackItem from '../../../../components/feedback-item';

import './admin-panel-feedback.scss';

const AdminPanelReports = (props) => {
  const {
    feedbackList
  } = props;

  return (
    <AdminPanel className="admin-panel-feedback">
      {feedbackItemsList}
    </AdminPanel>
  );
};

export default AdminPanelReports;