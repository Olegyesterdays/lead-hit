<template>
  <div class="content">
    <h3>
      {{ $t("analytics-page.chart-title")}}
    </h3>
    <div ref="chartContainer" class="chart-container" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import "//cdn.amcharts.com/lib/5/index.js";
import "//cdn.amcharts.com/lib/5/xy.js";
import "//cdn.amcharts.com/lib/5/themes/Animated.js";
import * as am5xy from "@amcharts/amcharts5/xy.js";
import {Theme as am5themes_Animated} from "@amcharts/amcharts5";
import * as am5 from "@amcharts/amcharts5";

const store = useStore();
const chartContainer = ref(null);

onMounted(() => {
  const root = am5.Root.new(chartContainer.value);

  root.setThemes([
    am5themes_Animated.new(root)
  ]);

  const data = computed(() => store.getters["analyticsModule/getChartData"]
      .map(item => ({
        date: new Date(item.date).getTime(),
        value: item.visits
      }))
  )

  const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        focusable: true,
        panX: true,
        panY: true,
        wheelX: "none",
        wheelY: "none"
      })
  );

  chart.plotContainer.events.on("wheel", (ev) => {
    if (ev.originalEvent.ctrlKey) {
      ev.originalEvent.preventDefault();
      chart.set("wheelX", "panX");
      chart.set("wheelY", "zoomX");
    } else {
      chart.set("wheelX", "none");
      chart.set("wheelY", "none");
    }
  });

  const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 5
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
  );

  const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
  );

  const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value",
        valueXField: "date",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "{valueY}"
        }),
        fill: am5.color(getComputedStyle(document.documentElement).getPropertyValue('--main-color')),
        stroke: am5.color(getComputedStyle(document.documentElement).getPropertyValue('--main-color')) // восстанавливаем stroke
      })
  );

  series.data.setAll(data.value);

  series.bullets.push(() => {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 5,
        fill: am5.color(getComputedStyle(document.documentElement).getPropertyValue('--main-color')),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2
      })
    });
  });

  const cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis
  }));

  cursor.lineY.set("visible", false);

  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));

  series.appear(1000, 100);
  chart.appear(1000, 100);
});
</script>

<style scoped>
.content {
  display: flex;
  flex-direction: column;

  h3 {
    text-align: center;
    color: var(--text-color-accent);
  }

  .chart-container {
    margin: 0 auto;
    width: 75%;
    height: 50vh;
  }
}
</style>
