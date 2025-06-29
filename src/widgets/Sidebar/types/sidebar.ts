import React from 'react';

export interface SidebarItemTypes {
    path: string
    text: string
    authOnly?: boolean
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}
