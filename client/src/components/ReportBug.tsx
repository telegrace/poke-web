import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const ReportBugForm: React.FC<any> = () => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <button onClick={handleShowModal}>Report Bug</button>
      {showModal ? <p>show true </p> : <p>show false </p>}
    </>
  );
};

export default ReportBugForm;
