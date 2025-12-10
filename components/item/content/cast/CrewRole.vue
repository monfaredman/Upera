<template>
  <p v-if="members && members.length" class="font-weight-normal">
    {{ role }}:
    <span v-for="(member, index) in members" :key="member.id">
      <nuxt-link
        v-if="member && member.id"
        :to="{ name: 'cast-id', params: { id: member.id } }"
      >
        {{ ChooseLang(member.name, member.name_fa) }}
      </nuxt-link>
      <span v-if="index < members.length - 1">, </span>
    </span>
  </p>
</template>

<script>
export default {
  name: 'CrewRole',
  props: {
    role: {
      type: String,
      required: true,
    },
    members: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    ChooseLang(en, fa) {
      if (fa && this.$i18n.locale === 'fa') return fa
      return en || ''
    },
  },
}
</script>
