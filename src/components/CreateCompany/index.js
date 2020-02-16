import React, { useState } from "react";
import { connect } from "react-redux";
import AboutCompany from "./AboutCompany";

function CreateComapny(props) {
  console.log({ props });
  const [companyDetails, updateCompanyDetails] = useState({});

  function handleAboutCompany(details) {
    console.log({ details, props });
    props.aboutCompany(details);
  }
  return (
    <React.Fragment>
      <AboutCompany details={companyDetails.aboutCompany} submitDetails={handleAboutCompany} />
    </React.Fragment>
  );
}

function mapStateToProps(state) {
  console.log("state.tasks", state);
  return { aboutCompany: state.aboutCompany };
}
function mapDispachToProps(dispatch) {
  return {
    aboutCompany: details => dispatch({ type: "aboutCompany", details: details })
    // onDelete: id => dispatch({ type: "DELETE_TASK", id: id }),
    // onCompleted: id => dispatch({ type: "TASK_COMPLETED", id: id }),
    // onEdit: (id, text) => dispatch({ type: "EDIT_TASK", id: id, text: text })
  };
}

export default connect(mapStateToProps, mapDispachToProps)(CreateComapny);

// export default CreateComapny;
