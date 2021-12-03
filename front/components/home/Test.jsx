import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

const colors = ["#E29C92", "#F6B3B9", "#FCDCC5", "#B0D9CD", "#63AAB5"];

const Test = () => {
  const canvasRef = useRef(null);
  const [mouse, setMouse] = useState({ x: null, y: null });
  let context;
  function Particle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.velocity = {
      x: (Math.random() - 0.5) * 5,
      y: (Math.random() - 0.5) * 5,
    };
    this.radius = radius;
    this.color = color;
    this.mass = 2;
    this.opacity = 0;

    this.update = (particles) => {
      this.draw();
      for (let i = 0; i < particles.length; i++) {
        if (this === particles[i]) continue;
        if (
          distance(this.x, this.y, particles[i].x, particles[i].y) -
            this.radius * 2 <
          0
        ) {
          resolveCollision(this, particles[i]);
        }
      }

      if (
        this.x - this.radius < 0 ||
        this.x + this.radius > context.canvas.clientWidth
      ) {
        this.velocity.x = -this.velocity.x;
      }

      if (
        this.y - this.radius < 0 ||
        this.y + this.radius > context.canvas.clientHeight
      ) {
        this.velocity.y = -this.velocity.y;
      }
      // mouse collision detection
      if (
        distance(mouse.x, mouse.y, this.x, this.y) < 120 &&
        this.opacity < 0.2
      ) {
        this.opacity += 0.02;
      } else if (this.opacity > 0) {
        this.opacity -= 0.02;
        this.opacity = Math.max(0, this.opacity);
      }

      this.x += this.velocity.x;
      this.y += this.velocity.y;
    };

    this.draw = () => {
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      context.save();
      context.globalAlpha = this.opacity;
      context.fillStyle = this.color;
      context.fill();
      context.restore();
      context.strokeStyle = this.color;
      context.stroke();
      context.closePath();
    };
  }

  //Utility Functions
  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function randomColor(colors) {
    return colors[Math.floor(Math.random() * colors.length)];
  }

  function distance(x1, y1, x2, y2) {
    const xDistance = x2 - x1;
    const yDistance = y2 - y1;

    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
  }

  function rotate(velocity, angle) {
    const rotateVelocities = {
      x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
      y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle),
    };
    return rotateVelocities;
  }

  function resolveCollision(particle, otherParticle) {
    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    //prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {
      //Grap angle between the two colliding particles
      const angle = -Math.atan2(
        otherParticle.y - particle.y,
        otherParticle.x - particle.x
      );

      //Store mass in var for better readabillity in collision equation.
      const m1 = particle.mass;
      const m2 = otherParticle.mass;

      //Velocity before equation
      const u1 = rotate(particle.velocity, angle);
      const u2 = rotate(otherParticle.velocity, angle);

      //Velocity after 1d collision equatoin
      const v1 = {
        x: (u1.x * (m1 - m2)) / (m1 + m2) + (u2.x * 2 * m2) / (m1 + m2),
        y: u1.y,
      };
      const v2 = {
        x: (u2.x * (m1 - m2)) / (m1 + m2) + (u1.x * 2 * m2) / (m1 + m2),
        y: u2.y,
      };

      //Final velocity after rotating axis back to original locatoin
      const vFinal1 = rotate(v1, -angle);
      const vFinal2 = rotate(v2, -angle);

      //Swap particle velocities for realistic bounce effect
      particle.velocity.x = vFinal1.x;
      particle.velocity.y = vFinal1.y;

      otherParticle.velocity.x = vFinal2.x;
      otherParticle.velocity.y = vFinal2.y;
    }
  }
  let particles;

  const init = () => {
    particles = [];
    for (let i = 0; i < 7; i++) {
      const radius = 5;
      let x = randomIntFromRange(radius, context.canvas.clientWidth - radius);
      let y = randomIntFromRange(radius, context.canvas.clientHeight - radius);
      const color = randomColor(colors);

      if (i !== 0) {
        for (let j = 0; j < particles.length; j++) {
          if (distance(x, y, particles[j].x, particles[j].y) - radius * 2 < 0) {
            x = randomIntFromRange(radius, context.canvas.clientWidth - radius);
            y = randomIntFromRange(
              radius,
              context.canvas.clientHeight - radius
            );
            j = -1;
          }
        }
      }
      particles.push(new Particle(x, y, radius, color));
    }
    console.log(particles);
  };

  const animate = () => {
    requestAnimationFrame(animate);
    context.clearRect(
      0,
      0,
      context.canvas.clientWidth,
      context.canvas.clientHeight
    );
    particles.forEach((particle) => {
      particle.update(particles);
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    context = canvas.getContext("2d");
    init();
    animate();
  }, []);

  const handleMouse = (e) => {
    setMouse({ x: e.clientX, y: e.clientY });
  };

  return (
    <canvas
      style={{ width: "1000px", height: "1000px" }}
      ref={canvasRef}
      onMouseMove={handleMouse}
    />
  );
};

export default Test;
