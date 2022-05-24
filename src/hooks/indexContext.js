import React from "react";

const IndexContext = React.createContext({ position: 0 });
IndexContext.displayName = "IndexContext";

const useIndex = () => {
  const context = React.useContext(IndexContext);
  if (context === undefined) {
    throw new Error("useIndex must be used within a IndexProvider");
  }
  return context;
};

export { IndexContext, useIndex };
