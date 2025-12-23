export default {
    props: {
        publisher: {
            type: String,
            required: true,
        },
        creators: {
            type: Array,
            required: true,
        },
        verifier: {
            type: String,
            required: true,
        },
    },

    template: `
        <div class="level-authors">
            <template v-if="selfVerified">
                <div class="type-title-sm">Publisher & Verifier</div>
                <p class="type-body">
                    <span>{{ publisher }}</span>
                </p>
            </template>

            <template v-else-if="creators.length === 0">
                <div class="type-title-sm">Publisher</div>
                <p class="type-body">
                    <span>{{ publisher }}</span>
                </p>

                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
            </template>

            <template v-else>
                <div class="type-title-sm">Creators</div>
                <p class="type-body">
                    <template v-for="(creator, index) in creators" :key="\`creator-\${creator}\`">
                        <span>{{ creator }}</span
                        ><span v-if="index < creators.length - 1">, </span>
                    </template>
                </p>

                <div class="type-title-sm">Verifier</div>
                <p class="type-body">
                    <span>{{ verifier }}</span>
                </p>
            </template>
        </div>
    `,

    computed: {
        selfVerified() {
            return this.publisher === this.verifier && this.creators.length === 0;
        },
    },
};
