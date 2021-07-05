import React from 'react';

export const highlightQueryMatch = (text, query) => {
    const [before, after] = text.toLowerCase().split(query);
    const q = text.toLowerCase().match(query);
    return (
        <div>
            {before ? <b>{before}</b> :null}
            {q}
            {after ? <b>{after}</b> :null}
        </div>
    )
}