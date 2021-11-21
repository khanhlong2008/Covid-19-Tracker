import * as React from "react";
import "../../App.css";
import HomePage from "./pages/HomePage.js"
// import { useDispatch } from 'react-redux'
// import * as actions from "./actions"

export default function News() {
  // const dispatch = useDispatch();
  // dispatch(actions.getPosts.getPostsRequest())
  return (
    <div className="news">
      <HomePage />
    </div>
  );
}
