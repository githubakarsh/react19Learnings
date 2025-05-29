

import React, { useEffect } from 'react';
import type HelmetProps from './HelmetProps';

export const UseTitle: React.FC<HelmetProps> = ({ title}) => {
    useEffect(() => {
        document.title = title;
    }, [title]);

    return null;
};