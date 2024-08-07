import React from "react";

export default function TimerFilter(params) {
  const { mainRowData, setRowData, rowData } = params;

  const clickHandler = (e) => {

    console.log(params)


    let a = localStorage.getItem("filter_task_id");
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
