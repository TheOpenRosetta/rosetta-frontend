import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const AuthorsProvider = (props) => {
    const [authors, setAuthors] = useState([]);
    return (
        <DataContext.Provider value={[authors, setAuthors]}>
            {props.children}
        </DataContext.Provider>
    );
};
