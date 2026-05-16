<template>
    <button class="page__btn">
        <span class="btn__label">{{ label }}</span>

        <span class="btn__icon">
            <component :is="icon" :color="color" :size="size" stroke-width="1.5" />
        </span>
    </button>

</template>

<script setup lang="ts">
import type { Component } from 'vue';

withDefaults(
    defineProps<{
        label: string;
        icon?: Component;
        color?: string;
        size?: number;
    }>(),
    {
        color: 'white',
        size: 20,
    }
);


</script>

<style scoped>
@keyframes icon-up-out {
    0% {
        transform: translate(0, 0);
        opacity: 1;
    }

    100% {
        transform: translate(6px, -6px);
        opacity: 0;
    }
}

@keyframes icon-up-in {
    0% {
        transform: translate(-6px, 6px);
        opacity: 0;
    }

    100% {
        transform: translate(0, 0);
        opacity: 1;
    }
}

.page__btn {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 1px solid transparent;
    font-size: calc(var(--font_size)* .9) !important;
    font-weight: var(--font_medium) !important;
    border-radius: var(--radius_full);
    padding: calc(var(--base_spacing)* .6) calc(var(--base_spacing)* 1) !important;
    padding-block: 0px;
    padding-inline: 0px;
    background-color: var(--color_primary);
    color: var(--color_white);
    transition: background-color var(--transition_lg), color var(--transition_lg), border-color var(--transition_lg);
}

.page__btn:hover,
.page__btn:focus {
    background-color: var(--color_secondary);
    color: var(--color_white);
    border-color: var(--color_primary);
}

.page__btn .btn__icon {
    width: 32px;
    height: 32px;
    border-radius: var(--radius_full);
    background-color: var(--color_secondary);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    overflow: hidden;
    transition: background-color var(--transition_lg);
}

.page__btn:hover .btn__icon svg {
    animation:
        icon-up-out 270ms cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards,
        icon-up-in 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms forwards;
}

.page__btn:hover .btn__icon {
    background-color: rgba(255, 255, 255, 0.2);
}

.page__btn:active {
    transform: scale(0.98);
}

.page__btn:focus-visible {
    box-shadow: 0 0 0 3px rgba(20, 20, 20, 0.3);
}
</style>