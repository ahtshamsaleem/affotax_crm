import React from "react";

export default function TimerFilter(params) {
  const { mainRowData, setRowData } = params;

  const clickHandler = (e) => {
    let running_timer_job_id = localStorage.getItem("filter_job_id");
    if (e.target.checked) {
      const result = mainRowData.filter((el) => running_timer_job_id === el._id);
      setRowData(result);
    } else {
      setRowData(mainRowData);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        textAlign: "center",
        gap: "4px",
      }}
    >
      <input style={{}} type="checkbox" onClick={clickHandler} />

      <label style={{}}>Running Timer</label>
    </div>
  );
}