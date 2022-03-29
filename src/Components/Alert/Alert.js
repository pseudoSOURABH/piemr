import React from "react";
function Alert(props) {
  const capitilize = (word) => {

    if(word==="danger")
    word="error"
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "50px" }}>
      {/* ( //if this is not null,then only code after first div will be executed */}
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capitilize(props.alert.type)}</strong>:{props.alert.msg}
        </div>
      )}
    </div>
  );
}
export default Alert;
