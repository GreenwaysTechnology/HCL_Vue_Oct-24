<script setup></script>
<template>
    <div>
        <slot>
            <h2>Fallback Header</h2>
        </slot>
        <slot name="main">
            <h2>Fallback main</h2>
        </slot>
        <slot name="footer">
            <h2>Fallback footer</h2>
        </slot>
    </div>
</template>