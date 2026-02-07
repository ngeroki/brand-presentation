/**
 * Tag Primitive Component
 * 
 * A system-style tag for labels and status indicators.
 * Built on top of SQCTag with additional variants.
 */

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { typography, cards, cx } from "@/styles/design-tokens";

interface TagProps {
    children: ReactNode;
    /** Visual variant */
    variant?: "default" | "success" | "danger" | "warning" | "info";
    /** Size variant */
    size?: "sm" | "md";
    /** Custom accent color (overrides variant) */
    accentColor?: string;
    /** Show animated pulse indicator */
    pulse?: boolean;
    /** Additional className */
    className?: string;
}

const variantStyles = {
    default: {
        bg: "bg-white/5",
        border: "border-white/10",
        text: "text-white/60",
        pulse: "bg-white/60",
    },
    success: {
        bg: "bg-green-500/10",
        border: "border-green-500/30",
        text: "text-green-500",
        pulse: "bg-green-500",
    },
    danger: {
        bg: "bg-red-500/10",
        border: "border-red-500/30",
        text: "text-red-500",
        pulse: "bg-red-500",
    },
    warning: {
        bg: "bg-amber-500/10",
        border: "border-amber-500/30",
        text: "text-amber-500",
        pulse: "bg-amber-500",
    },
    info: {
        bg: "bg-blue-500/10",
        border: "border-blue-500/30",
        text: "text-blue-500",
        pulse: "bg-blue-500",
    },
};

const sizeStyles = {
    sm: "px-3 py-1 text-[8px]",
    md: "px-4 py-1.5 text-[9px]",
};

export function Tag({
    children,
    variant = "default",
    size = "md",
    accentColor,
    pulse = false,
    className,
}: TagProps) {
    const styles = variantStyles[variant];

    return (
        <span
            className={cx(
                "inline-flex items-center gap-2",
                "font-mono font-black tracking-[0.3em] uppercase",
                "border rounded-full backdrop-blur-xl",
                sizeStyles[size],
                !accentColor && styles.bg,
                !accentColor && styles.border,
                !accentColor && styles.text,
                className
            )}
            style={accentColor ? {
                backgroundColor: `${accentColor}1a`,
                borderColor: `${accentColor}33`,
                color: accentColor,
            } : undefined}
        >
            {pulse && (
                <span
                    className={cx(
                        "w-1.5 h-1.5 rounded-full animate-pulse",
                        !accentColor && styles.pulse
                    )}
                    style={accentColor ? { backgroundColor: accentColor } : undefined}
                />
            )}
            {children}
        </span>
    );
}

/**
 * StatusTag - Compact status indicator
 */
interface StatusTagProps {
    status: "passed" | "failed" | "optimal" | "violation" | "active" | "pending";
    className?: string;
}

const statusConfig = {
    passed: { label: "PASSED", variant: "success" as const },
    failed: { label: "FAILED", variant: "danger" as const },
    optimal: { label: "OPTIMAL", variant: "success" as const },
    violation: { label: "VIOLATION", variant: "danger" as const },
    active: { label: "ACTIVE", variant: "info" as const },
    pending: { label: "PENDING", variant: "warning" as const },
};

export function StatusTag({ status, className }: StatusTagProps) {
    const config = statusConfig[status];
    return (
        <Tag variant={config.variant} size="sm" className={className}>
            {config.label}
        </Tag>
    );
}

/**
 * SystemTag - Monospace system-style label
 */
interface SystemTagProps {
    children: ReactNode;
    accentColor?: string;
    className?: string;
}

export function SystemTag({ children, accentColor = "#C5A572", className }: SystemTagProps) {
    return (
        <span
            className={cx(
                typography.label.system,
                className
            )}
            style={{ color: accentColor }}
        >
            {children}
        </span>
    );
}

export default Tag;
