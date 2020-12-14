import { useState } from 'react';
import { Imodal } from './types'

const useModal = () => {
    const [isShowing, setIsShowing] = useState<Boolean>(false);

    function toggle() {
        setIsShowing(!isShowing);
    }

    return {
        isShowing,
        toggle,
    }
};

export default useModal;