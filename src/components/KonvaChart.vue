<template>
  <div ref="container">
    <v-stage :config="configKonva" ref="stage">
      <v-layer>
        <v-line
          ref="line{{item.id}}"
          v-for="item in this.$store.getters['arrayManagement/getArrayToSort']"
          :key="item.id"
          :config="{
            points: [item.x, 0, item.x, item.y], // x1, y1, x2, y2
            stroke: item.stroke,
            strokeWidth: item.strokeWidth
          }"
        ></v-line>
      </v-layer>
    </v-stage>
    
  </div>
</template>

<script>

const width = window.innerWidth;
// const height = window.innerHeight;

export default {
  name: "KonvaChart",
  data: () => ({
    configKonva: {
      width: width - 200,
      height: 350,
    }
  }),

  beforeMount () {
    this.changeRect();
  },

  created () {
    window.addEventListener("resize", this.changeRect, { passive: true });
    this.changeRect();
  },

  computed: {
    
  },
  methods: {
    changeRect: function() {
      const container = this.$refs.container;

      if (!container) {
        return;
      }

      const width = container.offsetWidth;
      const height = container.offsetHeight;

      // console.log(width, height);
      this.configKonva.width = width;
      this.configKonva.height = height;

      this.$store.dispatch("setStageWidth", width - 200);
      this.$store.dispatch("setStageHeight", height);
    }
  }
};
</script>

<style>

</style>