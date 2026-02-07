/**
 * SectionHeader Primitive Component
 * 
 * A reusable section header with tag, title, and optional description.
 * Follows the cinematic HUD/system aesthetic.
 */

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { typography, spacing, animation, cx } from "@/styles/design-tokens";
import { SQCTag } from "@/styles/sqc-theme";

interface SectionHeaderProps {
    /** System tag text (e.g., "SYSTEM CODIFICATION", "Visual DNA") */
    tag?: string;
    /** Main title */
    title: string | ReactNode;
    /** Optional subtitle/description */
    description?: string;
    /** Accent color for gradients (from brand.colors.accent) */
    accentColor?: string;
    /** Size variant */
    size?: "sm" | "md" | "lg";
    /** Alignment */
    align?: "left" | "center";
    /** Additional className */
    className?: string;
    /** Show decorative line below title */
    divider?: boolean;
}

const sizeConfig = {
    sm: {
        title: typography.heading.sectionSm,
        desc: typography.body.sm,
        dividerWidth: "w-16",
    },
    md: {
        title: typography.heading.section,
        desc: typography.body.md,
        dividerWidth: "w-20",
    },
    lg: {
        title: typography.heading.hero,
        desc: typography.body.lg,
        dividerWidth: "w-32",
    },
};

export function SectionHeader({
    tag,
    title,
    description,
    accentColor = "#C5A572",
    size = "md",
    align = "center",
    className,
    divider = false,
}: SectionHeaderProps) {
    const config = sizeConfig[size];
    const alignClasses = align === "center"
        ? "flex flex-col items-center text-center"
        : "flex flex-col items-start text-left";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: animation.ease.smooth }}
            className={cx(alignClasses, spacing.gap.sm, className)}
        >
            {tag && (
                <SQCTag
                    className={align === "center" ? "mx-auto" : ""}
                    style={{ borderColor: `${accentColor}33`, color: accentColor }}
                >
                    {tag}
                </SQCTag>
            )}

            <h2 className={cx(config.title, "text-white")}>
                {title}
            </h2>

            {divider && (
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: size === "sm" ? 64 : size === "md" ? 80 : 128 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className={cx("h-px", config.dividerWidth)}
                    style={{ background: `linear-gradient(to right, transparent, ${accentColor}, transparent)` }}
                />
            )}

            {description && (
                <p className={cx(config.desc, "text-white/30 max-w-2xl")}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}

/**
 * SectionDivider - Decorative strip between sections
 */
interface SectionDividerProps {
    title: string;
    subtitle?: string;
    accentColor?: string;
}

export function SectionDivider({ title, subtitle, accentColor = "#C5A572" }: SectionDividerProps) {
    return (
        <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            className="relative py-6 px-8 border-y border-white/5 text-center overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-10"
                style={{ background: `linear-gradient(90deg, transparent, ${accentColor}, transparent)` }}
            />
            <div className="relative z-10">
                <span className={cx(typography.label.system)} style={{ color: accentColor }}>
                    {title}
                </span>
                {subtitle && (
                    <span className="block mt-1 text-[10px] font-mono text-white/30 tracking-widest">
                        {subtitle}
                    </span>
                )}
            </div>
        </motion.div>
    );
}

export default SectionHeader;
