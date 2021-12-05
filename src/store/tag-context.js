import React from "react";

const TagContext = React.createContext({
    filters: [],
    addFilter: (filter) => {},
    removeFilter: (filter) => {},
});

export default TagContext;