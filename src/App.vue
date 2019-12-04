<template>
    <router-view></router-view>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style>
    :active, :hover, :focus {
        outline: 0;
        outline-offset: 0;
    }

    ::placeholder {
        color: #666
    }

    ::selection {
        background-color: #1a8ecb;
        color: #fafafa;
    }

    body {
        font-size: 1em;
        min-width: 320px;
        position: relative;
        line-height: 1.65;
        font-family: 'Oswald', sans-serif;
        overflow-x: hidden;
        color: #81868e;
    }

    input {
        border: none;
    }
</style>
