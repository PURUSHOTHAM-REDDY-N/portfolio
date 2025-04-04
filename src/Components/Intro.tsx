import React, { useEffect } from "react";
import styles from "./intro.module.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Intro: React.FC = () => {
  useEffect(() => {
    const c = document.getElementById("canvas") as HTMLCanvasElement | null;
    if (!c) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const box = c.getBoundingClientRect();
      c.width = box.width;
      c.height = box.height;
    };

    const light = { x: 30, y: 52 };
    const colors = ["#f5c156", "#e6616b", "#5cd3ad"];

    const drawLight = () => {
      ctx.beginPath();
      ctx.arc(light.x, light.y, 1000, 0, 2 * Math.PI);
      let gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 1000);
      gradient.addColorStop(0, "#3b4654");
      gradient.addColorStop(1, "#2c343f");
      ctx.fillStyle = gradient;
      ctx.fill();

      ctx.beginPath();
      ctx.arc(light.x, light.y, 20, 0, 2 * Math.PI);
      gradient = ctx.createRadialGradient(light.x, light.y, 0, light.x, light.y, 5);
      gradient.addColorStop(0, "#fff");
      gradient.addColorStop(1, "#3b4654");
      ctx.fillStyle = gradient;
      ctx.fill();
    };

    class Box {
      half_size: number;
      x: number;
      y: number;
      r: number;
      shadow_length: number;
      color: string;

      constructor() {
        this.half_size = Math.floor(Math.random() * 10 + 1);
        this.x = Math.floor(Math.random() * c!.width + 1);
        this.y = Math.floor(Math.random() * c!.height + 1);
        this.r = Math.random() * Math.PI;
        this.shadow_length = 2000;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      getDots() {
        const full = (Math.PI * 2) / 4;
        return {
          p1: { x: this.x + this.half_size * Math.sin(this.r), y: this.y + this.half_size * Math.cos(this.r) },
          p2: { x: this.x + this.half_size * Math.sin(this.r + full), y: this.y + this.half_size * Math.cos(this.r + full) },
          p3: { x: this.x + this.half_size * Math.sin(this.r + full * 2), y: this.y + this.half_size * Math.cos(this.r + full * 2) },
          p4: { x: this.x + this.half_size * Math.sin(this.r + full * 3), y: this.y + this.half_size * Math.cos(this.r + full * 3) },
        };
      }

      rotate() {
        const speed = (60 - this.half_size) / 20;
        this.r += speed * 0.002;
        this.x += speed;
        this.y += speed;
      }

      draw() {
        const dots = this.getDots();
        ctx?.beginPath();
        ctx?.moveTo(dots.p1.x, dots.p1.y);
        ctx?.lineTo(dots.p2.x, dots.p2.y);
        ctx?.lineTo(dots.p3.x, dots.p3.y);
        ctx?.lineTo(dots.p4.x, dots.p4.y);
        ctx!.fillStyle = this.color;
        ctx!.fill();

        if (this.y - this.half_size > c!.height) this.y -= c!.height + 100;
        if (this.x - this.half_size > c!.width) this.x -= c!.width + 100;
      }
    }

    const boxes: Box[] = [];

    const draw = () => {
      ctx.clearRect(0, 0, c.width, c.height);
      drawLight();

      boxes.forEach((box) => {
        box.rotate();
        box.draw();
      });

      requestAnimationFrame(draw);
    };

    resize();
    draw();

    while (boxes.length < 14) {
      boxes.push(new Box());
    }

    window.onresize = resize;
    c.onmousemove = (e: MouseEvent) => {
      light.x = e.offsetX ?? e.layerX;
      light.y = e.offsetY ?? e.layerY;
    };
  }, []);

  return (
    <div id="home">
      <canvas id="canvas"></canvas>
      <div className={styles.title}>
        <div className={styles.textbox}>
          <div className={styles.profilepic}>
            <img src={"/images/profilepic.jpg"} alt="profile pic" />
          </div>
          <div className={styles.name}>
            Hello, I'm <span>Purushotham</span>.
          </div>
          <div className={styles.name}>Full stack web/App developer.</div>
          <a href="#navbar">
            <button className={styles.workbtn}>
              View My Work
              <span className={styles.arrow}>
                <ArrowForwardIosIcon />
              </span>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
