<template>
<span>
    {{ getText }}
</span>
</template>

<script>
export default {

    props: {

        text: {

            type: String
        }
    },

    data() {

        return {}
    },
    computed: {

        getText: function() {

            return this.$store.getters.getLanguage[this.text];
        }
    },

}
</script>