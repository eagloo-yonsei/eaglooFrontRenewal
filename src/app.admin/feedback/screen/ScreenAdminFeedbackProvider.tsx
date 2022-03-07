import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { ChildrenProp, Feedback } from 'app.modules/constant/interface';

interface AdminFeedbackContextProp {
  allFeedback: Feedback[];
}

const InitialAdminFeedbackContext: AdminFeedbackContextProp = {
  allFeedback: [],
};

const AdminFeedbackContext = createContext<AdminFeedbackContextProp>(
  InitialAdminFeedbackContext
);
export const useAdminFeedbackContext = () => useContext(AdminFeedbackContext);

export default function ScreenAdminFeedbackProvider({
  children,
}: ChildrenProp) {
  const [allFeedback, setAllFeedback] = useState<Feedback[]>([]);

  const API_ENDPOINT = process.env.EAGLOO_API_URI;

  useEffect(() => {
    getAllFeedback();
    return () => {};
  }, []);

  async function getAllFeedback() {
    await axios
      .get<{ success: boolean; allFeedback: Feedback[] }>(
        `${API_ENDPOINT}/api/feedback`
      )
      .then((response) => {
        if (response.data.success) {
          setAllFeedback(response.data.allFeedback as Feedback[]);
        }
      });
  }

  const adminFeedbackContext = { allFeedback };

  return (
    <AdminFeedbackContext.Provider value={adminFeedbackContext}>
      {children}
    </AdminFeedbackContext.Provider>
  );
}
