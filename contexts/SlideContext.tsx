"use client";

import { createContext, useContext } from "react";

interface SlideContextType {
    currentSlide: number;
    totalSlides: number;
    nextSlide: () => void;
    prevSlide: () => void;
    goToSlide: (index: number) => void;
}

const SlideContext = createContext<SlideContextType | undefined>(undefined);

export function useSlideNavigation() {
    const context = useContext(SlideContext);
    if (!context) {
        throw new Error("useSlideNavigation must be used within SlideContext.Provider");
    }
    return context;
}

export default SlideContext;
