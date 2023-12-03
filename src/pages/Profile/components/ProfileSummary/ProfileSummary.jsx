import { useEffect, useMemo, useState } from "react";

import Typography from "../../../../components/Typography";
import { profileSummary } from "../../../../data/content";
import ToastMessage from "../../../../components/ToastMessage/ToastMessage";
import { TOAST_TYPES } from "../../../../components/ToastMessage/ToastTypes";
import {
  PAGE_HEADERS,
  ProfileNotification,
} from "../../../../data/appConstants";
import PageHeader from "../../../../components/PageHeader";

import "./ProfileSummary.css";

const ProfileSummary = ({ delay }) => {
  const [summary, setSummary] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  const toastMessage = useMemo(() => <i>{ProfileNotification}</i>, []);

  useEffect(() => {
    if (currentIndex < profileSummary.length) {
      const timer = setInterval(() => {
        setSummary(
          (currentSummary) => currentSummary + profileSummary[currentIndex]
        );
        setCurrentIndex(currentIndex + 1);
      }, delay);
      return () => clearInterval(timer);
    }
  }, [currentIndex, summary, delay]);

  const handleSummaryClick = () => {
    setSummary(profileSummary);
    setCurrentIndex(profileSummary.length);
  };

  return (
    <div className="ProfileSummary" onClick={handleSummaryClick}>
      <PageHeader title={PAGE_HEADERS.Summary} />
      <Typography>{summary}</Typography>
      <ToastMessage
        type={TOAST_TYPES.INFO}
        message={toastMessage}
        delay={500}
      />
    </div>
  );
};

export default ProfileSummary;
