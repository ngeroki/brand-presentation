/**
 * Card Primitive Component
 * 
 * A reusable card wrapper that uses design tokens.
 * Supports multiple variants and custom styling.
 */

import { ReactNode } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cards, spacing, animation, cx } from "@/styles/design-tokens";

export type CardVariant = "glass" | "glassDark" | "glassLight" | "subtle" | "danger" | "success" | "stage";
export type CardSize = "sm" | "md" | "lg";
export type CardRadius = "sm" | "md" | "lg" | "hero";

interface CardProps extends Omit<HTMLMotionProps<"div">, "children"> {
    children: ReactNode;
    variant?: CardVariant;
    size?: CardSize;
    radius?: CardRadius;
    shadow?: boolean;
    hover?: boolean;
    className?: string;
}

const sizeMap: Record<CardSize, string> = {
    sm: spacing.padding.cardSm,
    md: spacing.padding.card,
    lg: spacing.padding.cardLg,
};

const radiusMap: Record<CardRadius, string> = {
    sm: cards.radius.sm,
    md: cards.radius.md,
    lg: cards.radius.lg,
    hero: cards.radius.hero,
};

export function Card({
    children,
    variant = "glass",
    size = "md",
    radius = "lg",
    shadow = true,
    hover = false,
    className,
    ...motionProps
}: CardProps) {
    const baseClasses = cx(
        cards.bg[variant],
        sizeMap[size],
        radiusMap[radius],
        shadow && cards.shadow.lg,
        hover && "hover:border-white/20 transition-all",
        "relative overflow-hidden",
        className
    );

    return (
        <motion.div className={baseClasses} {...motionProps}>
            {children}
        </motion.div>
    );
}

/**
 * CardContent - Inner content wrapper with optional spacing
 */
interface CardContentProps {
    children: ReactNode;
    className?: string;
    centered?: boolean;
}

export function CardContent({ children, className, centered = false }: CardContentProps) {
    return (
        <div className={cx(
            "relative z-10",
            centered && "flex flex-col items-center text-center",
            className
        )}>
            {children}
        </div>
    );
}

/**
 * CardBadge - Corner badge for status indicators
 */
interface CardBadgeProps {
    children: ReactNode;
    variant?: "success" | "danger" | "accent";
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
}

export function CardBadge({
    children,
    variant = "accent",
    position = "top-right"
}: CardBadgeProps) {
    const positionClasses = {
        "top-right": "absolute top-4 right-4",
        "top-left": "absolute top-4 left-4",
        "bottom-right": "absolute bottom-4 right-4",
        "bottom-left": "absolute bottom-4 left-4",
    };

    const variantClasses = {
        success: "bg-green-500/10 border-green-500/30 text-green-500",
        danger: "bg-red-500/10 border-red-500/30 text-red-500",
        accent: "bg-[#C5A572]/10 border-[#C5A572]/30 text-[#C5A572]",
    };

    return (
        <div className={cx(
            positionClasses[position],
            variantClasses[variant],
            "w-8 h-8 rounded-full border flex items-center justify-center"
        )}>
            {children}
        </div>
    );
}

export default Card;
