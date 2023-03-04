import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBugs } from "../reducer/app/actions";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const Dashboard = () => {
  const dispatch = useDispatch();
  const { isLoading, allBugs } = useSelector((store) => store.AppReducer);
  let critical = allBugs?.filter((item) => item.severity == "critical");
  let major = allBugs?.filter((item) => item.severity == "major");
  let medium = allBugs?.filter((item) => item.severity == "medium");
  let low = allBugs?.filter((item) => item.severity == "low");

  useEffect(() => {
    dispatch(getBugs());
    console.log(allBugs);
  }, []);
  return <div></div>;
};

export default Dashboard;
