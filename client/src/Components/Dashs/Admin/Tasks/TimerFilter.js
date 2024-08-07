import React, { Fragment, useCallback, useEffect, useState } from "react";

export default function TimerFilter(params) {

  const { taskId, mainRowData, setRowData, tempRef } = params;

  console.log(params)








  const clickHandler = (e) => {
    let a = localStorage.getItem('filter_task_id')
    if (e.target.checked) {
      const result = mainRowData.filter((el) => a === el._id);
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
