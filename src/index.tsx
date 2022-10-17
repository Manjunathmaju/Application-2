import React from "react";
import ReactDOM from "react-dom/client";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Kanbanboard from "./Kanbanboard";
// import Featch from "./featch/Featch";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <DndProvider backend={HTML5Backend}>

    <Kanbanboard />
    {/* <Featch/> */}

  </DndProvider>
);
