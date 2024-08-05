import React from "react";
import { comments } from "./commentData";
import Card from './Card';

const App = () => {
  return comments.map((comment) => <Card commentObject={comment} />);
};

export default App;

