import React from 'react';

function NavPageLayout({ children }) {
    return (
        <div css={s.layout}>
            {children}
        </div>
    );
}

export default NavPageLayout;