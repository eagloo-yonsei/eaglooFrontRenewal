import React from 'react';
import { SidebarPageContainer } from 'app.components/SidebarPageContainer';
import AdminFeedbackAllFeedback from '../component/Admin__Feedback__AllFeedback';

export default function ScreenAdminFeedback() {
  return (
    <SidebarPageContainer
      contentTitles={['모든 피드백']}
      contents={[AdminFeedbackAllFeedback()]}
    />
  );
}
