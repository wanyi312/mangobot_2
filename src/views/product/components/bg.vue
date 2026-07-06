<template>
  <div class="bg">
    <div v-if="bg === 'A2'" class="bg-img"></div>
    <div v-else-if="bg === 'G1'" class="bg-g1">
      <div class="bg-g1-left">
        <div class="bg-g1-item b1">
          <div class="bg-g1-item-title">Mechanical Arm</div>
          <div class="bg-g1-item-desc">
            7-DoF (Degrees of Freedom) <br />
            Max Single-Arm Payload: 5 kg
          </div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b2">
          <div class="bg-g1-item-title">Torso</div>
          <div class="bg-g1-item-desc">DoF: Pitch & Lift</div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b3">
          <div class="bg-g1-item-title">Chassis</div>
          <div class="bg-g1-item-desc">
            600 mm Passage width <br />
            750 mm Turning radius (In-place rotation) <br />
            Active Obstacle Avoidance
          </div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
      </div>
      <div class="bg-g1-right">
        <div class="bg-g1-item b4">
          <div class="bg-g1-item-title">Emergency Stop Button</div>
          <div class="bg-g1-item-desc"></div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b5">
          <div class="bg-g1-item-title">Touchscreen Display</div>
          <div class="bg-g1-item-desc"></div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b6">
          <div class="bg-g1-item-title">Rear Sensors</div>
          <div class="bg-g1-item-desc">2x Fisheye Cameras</div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b7">
          <div class="bg-g1-item-title">Battery</div>
          <div class="bg-g1-item-desc">Endurance>4H</div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b8">
          <div class="bg-g1-item-title">Head</div>
          <div class="bg-g1-item-desc">
            1x RGBD Camera & 3x Fisheye Cameras <br />
            DoF: Yaw & Pitch
          </div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle right">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b9">
          <div class="bg-g1-item-title">Computing Platform</div>
          <div class="bg-g1-item-desc">NVIDIA Jetson AGX Orin 64GB</div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle right">
              <div></div>
            </div>
          </div>
        </div>
        <div class="bg-g1-item b10">
          <div class="bg-g1-item-title">End-Effector</div>
          <div class="bg-g1-item-desc">
            Parallel Gripper / Dexterous Hand <br />
            2x RGBD Cameras / 2x Fisheye Cameras <br />
            6-Axis Force/Torque (F/T) Sensor
          </div>
          <div class="bg-g1-item-line">
            <div class="bg-g1-item-line-left"></div>
            <div class="bg-g1-item-circle right">
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="bg === 'D1'" class="bg-D1">
      <div class="bg-D1-img">
        <div class="bg-g1-item-line d1">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d2">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d3">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d4">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d5">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d6">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d7">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-g1-item-line d8">
          <div class="bg-g1-item-line-left"></div>
          <div class="bg-g1-item-circle">
            <div></div>
          </div>
        </div>
        <div class="bg-D1-img-text text1">Wi-Fi 5 / Bluetooth 5.2</div>
        <div class="bg-D1-img-text text2">4K wide-angle camera</div>
        <div class="bg-D1-img-text text3">
          Various advanced movements<br />
          (jumping, running, stair climbing, etc.)
        </div>
        <div class="bg-D1-img-text text4">
          Comprehensive software secondary development interface
        </div>
        <div class="bg-D1-img-text text5">
          Dynamic balance control,<br />
          shock resistance, fall recovery support
        </div>
        <div class="bg-D1-img-text text6">Quick-swap battery</div>
        <div class="bg-D1-img-text text7">
          Remote controller + APP operation
        </div>
        <div class="bg-D1-img-text text8">
          Rich hardware expansion (LiDAR, camera, computing platform, etc.)
        </div>
      </div>
    </div>
    <div v-else-if="bg === 'X2'">
      <div class="bg-X2-img"></div>
    </div>
  </div>
</template>
<script setup>
import { ref, defineProps } from "vue";
const { bg = "" } = defineProps(["bg"]);
</script>
<style lang="less" scoped>
.bg {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &-g1 {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 898px;
    padding: 122px 0;
    direction: ltr;
    &-item {
      position: absolute;
      &.b1 {
        width: 282px;
        top: 99px;
        left: -223px;
        .bg-g1-title,
        .bg-g1-desc {
          width: 258px;
        }
      }
      &.b2 {
        width: 258px;
        top: 260px;
        left: -24px;
        .bg-g1-item-line {
          width: 200px;
        }
        .bg-g1-title,
        .bg-g1-desc {
          width: 258px;
        }
      }
      &.b3 {
        width: 351px;
        top: 415px;
        left: -203px;
        .bg-g1-item-line {
          width: 351px;
        }
        .bg-g1-item-title,
        .bg-g1-item-desc {
          width: 351px;
        }
      }
      &.b4 {
        width: 351px;
        top: 71px;
        left: -12px;
        .bg-g1-title,
        .bg-g1-desc {
          width: 300px;
        }
      }
      &.b5 {
        width: 351px;
        top: 120px;
        left: -106px;
        .bg-g1-title,
        .bg-g1-desc {
          width: 300px;
        }
      }
      &.b6 {
        width: 251px;
        top: 180px;
        left: -20px;
        .bg-g1-title,
        .bg-g1-desc,
        .bg-g1-item-line {
          width: 200px;
        }
      }
      &.b7 {
        width: 251px;
        bottom: 112px;
        left: -40px;
        .bg-g1-title,
        .bg-g1-desc,
        .bg-g1-item-line {
          width: 200px;
        }
      }
      &.b8 {
        width: 351px;
        top: 8px;
        left: 345px;
        .bg-g1-item-title,
        .bg-g1-item-desc {
          padding-left: 44px;
        }
        .bg-g1-title,
        .bg-g1-desc,
        .bg-g1-item-line {
          width: 350px;
        }
      }
      &.b9 {
        width: 351px;
        top: 185px;
        left: 345px;
        .bg-g1-item-title,
        .bg-g1-item-desc {
          padding-left: 80px;
        }
        .bg-g1-title,
        .bg-g1-desc,
        .bg-g1-item-line {
          width: 350px;
        }
      }
      &.b10 {
        width: 351px;
        top: 285px;
        left: 410px;
        .bg-g1-item-line {
          top: -90px;
        }
        .bg-g1-item-title,
        .bg-g1-item-desc {
          padding-left: 30px;
        }
        .bg-g1-item-title,
        .bg-g1-item-desc,
        .bg-g1-item-line {
          width: 380px;
        }
      }
      &-line {
        width: 282px;
        height: 0.602px;
        background: rgba(154, 154, 154, 0.44);
        position: relative;
        .bg-g1-item-circle {
          position: absolute;
          right: 0;
          top: 50%;
          transform: translate(50%, -50%);
        }
        .right {
          left: 0;
          transform: translate(-50%, -50%);
        }
      }
      &-circle {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 19.861px;
        height: 19.861px;
        border-radius: 601.243px;
        background: rgba(245, 135, 89, 0.32);
        div {
          width: 10.231px;
          height: 10.231px;
          border-radius: 601.243px;
          background: var(
            --Linear,
            linear-gradient(270deg, #ef536b 0%, #f79355 100%)
          );
          box-shadow: 0 0 0.542px 0 rgba(0, 0, 0, 0.25);
        }
      }
      &-title {
        color: #1a1e1d;
        font-family: Manrope;
        font-size: 20px;
        font-style: normal;
        font-weight: 800;
        white-space: pre-wrap;
        line-height: 22.268px; /* 111.341% */
      }
      &-desc {
        color: #1a1e1d;
        font-family: Manrope;
        font-size: 16.852px;
        font-style: normal;
        font-weight: 500;
        line-height: 22.268px;
        white-space: pre-wrap;
      }
    }
    &-left {
      width: 451px;
      height: 654px;
      aspect-ratio: 20/29;
      background: url("../assets/g1-left.png") #fff 50% / cover no-repeat;
      position: relative;
    }
    &-right {
      width: 623px;
      height: 623px;
      aspect-ratio: 1/1;
      background: url("../assets/g1-right.png") #fff 50% / cover no-repeat;
      position: relative;
    }
  }
  &-img {
    width: 100%;
    height: 881px;
    margin: 131px auto;
    flex-shrink: 0;
    background: url(../assets/a2-attrs-bg.jpg) lightgray 50% / cover no-repeat;
  }
  &-D1 {
    padding: 230px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    direction: ltr;
    .bg-g1-item-line-left {
      background: rgba(154, 154, 154, 0.44);
    }
    .bg-g1-item-circle {
      width: 23px;
      height: 23px;
      div {
        height: 12px;
        width: 12px;
      }
    }
    .d1 {
      width: 196.107px;
      left: -102px;
      top: 137px;
    }
    .d2 {
      width: 196.107px;
      top: 231px;
      left: -97px;
    }
    .d3 {
      width: 93px;
      rotate: 90deg;
      top: 20px;
      left: 330px;
    }
    .d4 {
      width: 84px;
      rotate: -90deg;
      top: 515px;
      left: 17px;
    }
    .d5 {
      width: 84px;
      rotate: -90deg;
      top: 613px;
      left: 224px;
    }
    .d6 {
      width: 84px;
      rotate: -90deg;
      top: 505px;
      left: 460px;
    }
    .d7 {
      width: 280px;
      rotate: 180deg;
      top: 224px;
      left: 383px;
    }
    .d8 {
      width: 216.49px;
      rotate: 180deg;
      top: 111px;
      left: 495px;
    }
    .text1 {
      top: 96px;
      left: -178px;
    }
    .text2 {
      top: 220px;
      left: -267px;
    }
    .text3 {
      top: 543px;
      left: -263px;
    }
    .text4 {
      bottom: -68px;
      left: 31px;
    }
    .text5 {
      top: 543px;
      width: 305px;
      left: 522px;
    }
    .text6 {
      top: 220px;
      right: -180px;
      width: 154px;
    }
    .text7 {
      top: 78px;
      left: 592px;
      width: 275px;
    }
    .text8 {
      width: 531px;
      top: -53px;
      left: 121px;
    }
    &-img {
      width: 631.086px;
      height: 631.086px;
      aspect-ratio: 1/1;
      position: relative;
      background: url(../assets/bg-attrs.png) #fff 50% / cover no-repeat;
      &-text {
        color: #1a1e1d;
        text-align: center;
        font-family: Manrope;
        font-size: 16.852px;
        font-style: normal;
        font-weight: 500;
        line-height: 22.268px; /* 132.143% */
        position: absolute;
      }
    }
  }
  &-X2 {
    &-img {
      display: flex;
      width: 1696px;
      height: 1076px;
      margin: 0 auto;
      background: url(../assets/x2-attrs-bg.png) #fff 50% / cover no-repeat;
    }
  }
}

// 移动端（440 设计稿：vw = px ÷ 440 × 100）
@media (max-width: 767px) {
  .bg {
    .bg-img {
      margin: 9.54545vw auto;
      width: 100vw;
      max-width: 100%;
      height: 65.02727vw;
      box-sizing: border-box;
    }
    .bg-X2-img {
      width: 93.18182vw;
      height: 59.11773vw;
      margin: 0 auto 4.09091vw;
      box-sizing: border-box;
    }
    .bg-D1-img {
      width: 46.78614vw;
      height: 46.78614vw;
      aspect-ratio: 1/1;
      &-text {
        color: var(--Color-4, #1a1e1d);
        text-align: center;
        font-family: Geist;
        font-size: 1.24932vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.65091vw; /* 132.143% */
      }
      .bg-g1-item-circle {
        width: 1.71955vw;
        height: 1.71955vw;
        border-radius: 52.0575vw;
        background: rgba(245, 135, 89, 0.32);
        div {
          width: 0.88636vw;
          height: 0.88636vw;
          border-radius: 52.0575vw;
          background: var(
            --Linear,
            linear-gradient(270deg, #ef536b 0%, #f79355 100%)
          );
          box-shadow: 0 0 0.04682vw 0 rgba(0, 0, 0, 0.25);
        }
      }
      .d1 {
        width: 14.53864vw;
        height: 0.05205vw;
        left: -7.27273vw;
        top: 10.22727vw;
      }
      .text1 {
        left: -11.36364vw;
        top: 7.95455vw;
      }
      .d2 {
        width: 14.53864vw;
        left: -7.27273vw;
        height: 0.05205vw;
        top: 16.81818vw;
      }
      .text2 {
        left: -20.45455vw;
        top: 16.36364vw;
      }
      .d3 {
        width: 6.89455vw;
        top: 1.36364vw;
        height: 0.05205vw;
        left: 24.31818vw;
      }
      .text8 {
        width: 39.09091vw;
        top: -2.72727vw;
        left: 8.40909vw;
      }
      .d4 {
        width: 6.13636vw;
        height: 0.05205vw;
        top: 37.95455vw;
        left: 1.36364vw;
      }
      .text3 {
        left: -6.81818vw;
        top: 41.36364vw;
      }
      .d5 {
        width: 6.81818vw;
        top: 45.90909vw;
        height: 0.05205vw;
        left: 16.81818vw;
      }
      .text4 {
        left: 3.63636vw;
        top: 49.77273vw;
      }
      .d6 {
        width: 6.13636vw;
        height: 0.05205vw;
        left: 33.86364vw;
        top: 36.81818vw;
      }
      .text5 {
        width: 22.72727vw;
        top: 39.09091vw;
        left: 38.63636vw;
      }
      .d7 {
        width: 20.72636vw;
        height: 0.05205vw;
        left: 28.86364vw;
        top: 17.5vw;
      }
      .text6 {
        width: 11.59091vw;
        left: 50.68182vw;
        top: 17.04545vw;
      }
      .d8 {
        width: 15.90909vw;
        height: 0.05205vw;
        left: 37.04545vw;
        top: 8.40909vw;
      }
      .text7 {
        width: 20.68182vw;
        left: 42.5vw;
        top: 5vw;
      }
    }
    .bg-g1 {
      display: flex;
      width: 100vw;
      max-width: 100%;
      padding: 6.35409vw 7.86455vw;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      height: 53.18182vw;
      &-left {
        width: 27.878vw;
        height: 40.42614vw;
      }
      &-right {
        width: 38.510vw;
        height: 38.510vw;
      }
      .b1 {
        width: 15.90909vw;
        left: -12.72727vw;
        top: 6.81818vw;
        .bg-g1-item-line {
          width: 17.5vw;
        }
      }
      .b2 {
        width: 15.90909vw;
        left: -5vw;
        top: 15.90909vw;
        .bg-g1-item-line {
          width: 15.90909vw;
        }
      }

      .b3 {
        width: 21.59091vw;
        left: -12.04545vw;
        top: 24.31818vw;
        .bg-g1-item-line {
          width: 21.59091vw;
        }
      }

      .b4 {
        left: 3.18182vw;
        top: 4.09091vw;
        .bg-g1-item-line {
          margin-top: 0.45455vw;
        }
      }

      .b5 {
        left: -2.95455vw;
        top: 7.04545vw;
        .bg-g1-item-line {
          margin-top: 0.45455vw;
        }
      }

      .b6 {
        left: 0.90909vw;
        top: 11.13636vw;
        .bg-g1-item-line {
          margin-top: 0.45455vw;
        }
      }

      .b7 {
        left: -0.68182vw;
        top: 28.40909vw;
        .bg-g1-item-line {
          margin-top: 0.45455vw;
        }
      }

      .b8 {
        left: 21.81818vw;
        top: -1.59091vw;
        .bg-g1-item-line {
          margin-top: 0.45455vw;
        }
      }

      .b9 {
        top: 9.09091vw;
        left: 20.90909vw;
        .bg-g1-item-line {
          margin-top: 0.45455vw;
        }
      }

      .b10 {
        left: 25.68182vw;
        top: 17.04545vw;
        .bg-g1-item-line {
          margin-top: -2.72727vw;
        }
      }
      .bg-g1-item-line {
        height: 0.03727vw;
      }
      .bg-g1-item-desc {
        color: var(--Color-4, #1a1e1d);
        font-family: Manrope;
        font-size: 1.04159vw;
        font-style: normal;
        font-weight: 500;
        line-height: 1.37659vw;
      }
      .bg-g1-item-title {
        color: var(--Color-4, #1a1e1d);
        font-family: Manrope;
        font-size: 1.23636vw;
        font-style: normal;
        font-weight: 800;
        line-height: 1.37659vw; /* 111.341% */
      }
      .bg-g1-item-circle {
        width: 1.22773vw;
        height: 1.22773vw;
        border-radius: 37.165vw;
        background: rgba(245, 135, 89, 0.32);
        div {
          width: 0.6325vw;
          height: 0.6325vw;
          border-radius: 37.165vw;
          background: var(
            --Linear,
            linear-gradient(270deg, #ef536b 0%, #f79355 100%)
          );
          box-shadow: 0 0 0.03341vw 0 rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
}
</style>