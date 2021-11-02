import React, { createContext, useState } from "react";
export const DataContext = createContext();
export const AuthorsProvider = (props) => {
    const [authors, setAuthors] = useState([]);
    console.log(authors);
    return (
        <DataContext.Provider value={[authors, setAuthors]}>
            {props.children}
        </DataContext.Provider>
    );
};
