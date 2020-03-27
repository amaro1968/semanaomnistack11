

import React from 'react'; // obrigatorio esta no arquivo

/* export default function Hearder(props) {
    return(
    <header>
        <h1>{props.children}</h1>
    </header>
    );
}
 */
export default function Hearder({children}) {  // neste caso eu especifico qual parametro quero receber
    return(
    <header>
        <h1>{children}</h1>
    </header>
    );
}