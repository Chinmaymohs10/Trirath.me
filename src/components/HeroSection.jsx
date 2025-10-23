import React, { useEffect, useRef } from "react";
import Tripic from "../assets/Tripic.png"
import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    let particles = [];
    let time = 0;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(129, 230, 217, ${this.alpha})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < 50; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      // Clear with gradient background
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.5, "#1a2d4d");
      gradient.addColorStop(1, "#0f2847");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Add subtle animated glow effect
      ctx.fillStyle = `rgba(129, 230, 217, ${0.05 * Math.sin(time * 0.005)})`;
      ctx.fillRect(0, 0, width, height);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(ctx);
      });

      // Draw connecting lines
      ctx.strokeStyle = "rgba(129, 230, 217, 0.1)";
      ctx.lineWidth = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      time++;
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-slate-900">
      {/* Animated Background Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Social Icons Sidebar */}
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-6">
        <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all duration-300">
          <Facebook size={24} />
        </a>
        <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all duration-300">
          <Instagram size={24} />
        </a>
        <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all duration-300">
          <Twitter size={24} />
        </a>
        <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all duration-300">
          <Linkedin size={24} />
        </a>
        <a href="#" className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 hover:bg-cyan-500 text-cyan-400 hover:text-white transition-all duration-300">
          <Mail size={24} />
        </a>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-between px-12 left-20">
        {/* Left Content */}
        <div className="max-w-2xl">
          <h1 className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Tribikram Rath
            </span>
          </h1>

          <h2 className="text-4xl font-semibold text-white mb-4">
            Inspiring Tech Innovation
          </h2>

          <p className="text-xl text-yellow-400 italic mb-8">
            30+ Years Shaping a Digital Future
          </p>

          <button className="px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-dark-900 font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
            Discover My Journey
          </button>
        </div>

        {/* Right Circle Avatar */}
        <div className="flex-1 flex justify-end pr-20">
          <div className="relative w-64 h-64">
            {/* Outer Circle Animation */}
            <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-50 animate-pulse"></div>

            {/* Middle Circle */}
            <div className="absolute inset-2 rounded-full border border-cyan-300 opacity-40"></div>

            {/* Inner Circle */}
            <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
              <img
                src={Tripic}
                alt="TR Logo"
                className="w-28 h-35 rounded-full object-cover"
              />
            </div>

            {/* Rotating Border */}
            <div
              className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-300 animate-spin"
              style={{ animationDuration: "8s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React, { useEffect, useRef } from "react";
// import Tripic from "../assets/Tripic.png";
// import { Facebook, Instagram, Twitter, Linkedin, Mail } from "lucide-react";

// export default function HeroSection() {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     const width = (canvas.width = window.innerWidth);
//     const height = (canvas.height = window.innerHeight);

//     let particles = [];
//     let time = 0;

//     class Particle {
//       constructor() {
//         this.x = Math.random() * width;
//         this.y = Math.random() * height;
//         this.vx = (Math.random() - 0.5) * 2;
//         this.vy = (Math.random() - 0.5) * 2;
//         this.size = Math.random() * 3 + 1;
//         this.alpha = Math.random() * 0.5 + 0.2;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;

//         if (this.x < 0 || this.x > width) this.vx *= -1;
//         if (this.y < 0 || this.y > height) this.vy *= -1;

//         this.x = Math.max(0, Math.min(width, this.x));
//         this.y = Math.max(0, Math.min(height, this.y));
//       }

//       draw(ctx) {
//         ctx.fillStyle = `rgba(129, 230, 217, ${this.alpha})`;
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fill();
//       }
//     }

//     // Initialize particles
//     for (let i = 0; i < 50; i++) {
//       particles.push(new Particle());
//     }

//     const animate = () => {
//       const gradient = ctx.createLinearGradient(0, 0, width, height);
//       gradient.addColorStop(0, "#0f172a");
//       gradient.addColorStop(0.5, "#1a2d4d");
//       gradient.addColorStop(1, "#0f2847");
//       ctx.fillStyle = gradient;
//       ctx.fillRect(0, 0, width, height);

//       ctx.fillStyle = `rgba(129, 230, 217, ${0.05 * Math.sin(time * 0.005)})`;
//       ctx.fillRect(0, 0, width, height);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw(ctx);
//       });

//       ctx.strokeStyle = "rgba(129, 230, 217, 0.1)";
//       ctx.lineWidth = 1;
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 150) {
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
//             ctx.lineTo(particles[j].x, particles[j].y);
//             ctx.stroke();
//           }
//         }
//       }

//       time++;
//       requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return (
//     <div className="relative w-full h-screen overflow-hidden bg-slate-900">
//       {/* Animated Background Canvas */}
//       <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

//       {/* Social Icons Sidebar */}
//       <div className="absolute left-3 top-1/2 transform -translate-y-1/2 z-20 flex flex-col gap-4 sm:gap-6">
//         <a className="social-icon" href="#"><Facebook size={24} /></a>
//         <a className="social-icon" href="#"><Instagram size={24} /></a>
//         <a className="social-icon" href="#"><Twitter size={24} /></a>
//         <a className="social-icon" href="#"><Linkedin size={24} /></a>
//         <a className="social-icon" href="#"><Mail size={24} /></a>
//       </div>

//       {/* Hero Content */}
//       <div className="absolute inset-0 z-10 flex flex-col md:flex-row items-center justify-between px-6 sm:px-12 left-0 md:left-20">
//         {/* Left Content */}
//         <div className="max-w-full md:max-w-2xl text-center md:text-left mb-10 md:mb-0">
//           <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
//               Tribikram Rath
//             </span>
//           </h1>

//           <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white mb-4">
//             Inspiring Tech Innovation
//           </h2>

//           <p className="text-lg sm:text-xl text-yellow-400 italic mb-8">
//             30+ Years Shaping a Digital Future
//           </p>

//           <button className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-blue-400 to-cyan-400 text-dark-900 font-bold rounded-full hover:shadow-lg hover:shadow-cyan-400/50 transition-all duration-300 transform hover:scale-105">
//             Discover My Journey
//           </button>
//         </div>

//         {/* Right Circle Avatar */}
//         <div className="flex-1 flex justify-center md:justify-end pr-0 md:pr-20">
//           <div className="relative w-40 h-40 sm:w-64 sm:h-64">
//             {/* Outer Circle Animation */}
//             <div className="absolute inset-0 rounded-full border-2 border-cyan-400 opacity-50 animate-pulse"></div>

//             {/* Middle Circle */}
//             <div className="absolute inset-2 rounded-full border border-cyan-300 opacity-40"></div>

//             {/* Inner Circle */}
//             <div className="absolute inset-8 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center">
//               <img
//                 src={Tripic}
//                 alt="TR Logo"
//                 className="w-24 h-24 sm:w-28 sm:h-35 rounded-full object-cover"
//               />
//             </div>

//             {/* Rotating Border */}
//             <div
//               className="absolute inset-0 rounded-full border-2 border-transparent border-t-cyan-400 border-r-cyan-300 animate-spin"
//               style={{ animationDuration: "8s" }}
//             ></div>
//           </div>
//         </div>
//       </div>

//       {/* Social icon classes */}
//       <style>{`
//         .social-icon {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           width: 48px;
//           height: 48px;
//           border-radius: 9999px;
//           background-color: #1e293b;
//           color: #0fe6d9;
//           transition: all 0.3s;
//         }
//         .social-icon:hover {
//           background-color: #06b6d4;
//           color: #fff;
//         }
//       `}</style>
//     </div>
//   );
// }
