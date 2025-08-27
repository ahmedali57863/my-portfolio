// "use client";


// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import { FlipWords } from "./ui/flip-words";
// import Spline from "@splinetool/react-spline";
// import { Button } from "./ui/stateful-button";

// // =======================
// // Copy Email Button
// // =======================
// const CopyEmailButton = () => {
//   const email = "ahmedali57863@gmail.com";
//   const [copied, setCopied] = useState(false);

//   const handleCopyEmail = () => {
//     return new Promise((resolve) => {
//       navigator.clipboard.writeText(email);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//       setTimeout(resolve, 1000); // for stateful-button animation
//     });
//   };

//   return (
//     <Button
//       onClick={handleCopyEmail}
//       className="w-full px-4 py-2 text-xs text-white transition border rounded-full font-Pixelify2 sm:w-auto border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-black hover:shadow-lg hover:shadow-fuchsia-500/40"
//     >
//       {copied ? "Copied!" : "Copy Email"}
//     </Button>
//   );
// };

// // =======================
// // Hero Component
// // =======================
// const Hero = () => {
//   const words = [
//     "Web Interfaces",
//     "3D Visuals",
//     "Responsiveness",
//     "UI Animations",
//     "High-Performance",
//     "User Experience",
//   ];

//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative flex flex-col-reverse items-center justify-between min-h-screen px-4 py-8 md:flex-row md:px-11 bg-gradient-to-b from-[#dab6d5] via-[#e2addd] to-[#f3aef0]"
//       style={{
//         opacity: loaded ? 1 : 0,
//         transition: "opacity 0.8s ease-in-out",
//       }}
//     >
//       {/* Left Text */}
//       <div className="z-20 flex flex-col justify-center flex-1 mt-4 space-y-3 text-center sm:mt-6 md:mt-0 md:text-left">
//         <p className="text-xs text-gray-700 sm:text-sm md:text-base font-brshape">
//           Crafting digital experiences that captivate and inspire
//         </p>

//         <motion.h1 className="relative text-2xl font-bold text-black sm:text-3xl md:text-5xl lg:text-6xl">
//           <FlipWords words={words} />
//         </motion.h1>

//         <TextGenerateEffect
//           words="Transforming ideas into digital experiences. From smooth UI interactions and responsive designs to immersive 3D visuals and creative web animations, I build websites that are not just functional, but memorable. Websites focused on clean code, performance, and user-centered design to create digital experiences that engage, inspire, and leave a lasting impression."
//           className="font-light text-fuchsia-900 font-Pixelify"
//           textClassName="text-xs sm:text-sm md:text-base"
//         />

//         <div className="flex flex-col w-full gap-3 py-6 sm:flex-row sm:justify-start">
//           <a
//   href="mailto:ahmedali57863@gmail.com?subject=Hello&body=I%20want%20to%20hire%20you"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   <button className="w-full px-4 py-2 text-xs text-gray-700 transition border rounded-full font-Pixelify2 sm:w-auto border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-black hover:shadow-lg hover:shadow-fuchsia-500/40">
//     Hire Me
//   </button>
// </a>
//           <CopyEmailButton />
//         </div>
//       </div>

//       {/* Right Side 3D Model */}
//       <div className="relative flex items-center justify-center flex-1 mb-8 md:mb-0">
//         <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] h-[400px] sm:h-[500px] md:h-[600px] flex justify-center">
//           <Spline scene="https://prod.spline.design/xxgT0NtXKAf2v9U6/scene.splinecode" />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;












// GALAXY

// "use client";

// import React, { useEffect, useState, useRef } from "react";
// import { motion } from "framer-motion";
// import { TextGenerateEffect } from "./ui/text-generate-effect";
// import { FlipWords } from "./ui/flip-words";
// import { Button } from "./ui/stateful-button";
// import * as THREE from "three";

// // =======================
// // Copy Email Button
// // =======================
// const CopyEmailButton = () => {
//   const email = "ahmedali57863@gmail.com";
//   const [copied, setCopied] = useState(false);

//   const handleCopyEmail = () => {
//     return new Promise((resolve) => {
//       navigator.clipboard.writeText(email);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//       setTimeout(resolve, 1000); // for stateful-button animation
//     });
//   };

//   return (
//     <Button
//       onClick={handleCopyEmail}
//       className="w-full px-4 py-2 text-xs text-white transition border rounded-full font-Pixelify2 sm:w-auto border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-black hover:shadow-lg hover:shadow-fuchsia-500/40"
//     >
//       {copied ? "Copied!" : "Copy Email"}
//     </Button>
//   );
// };

// // =======================
// // Massive Rotating Galaxy System
// // =======================
// const MassiveGalaxySystem = () => {
//   const mountRef = useRef(null);
//   const sceneRef = useRef(null);
//   const rendererRef = useRef(null);
//   const animationRef = useRef(null);

//   useEffect(() => {
//     if (!mountRef.current) return;

//     // Scene setup with enhanced settings
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
//     const renderer = new THREE.WebGLRenderer({ 
//       antialias: true, 
//       alpha: true,
//       powerPreference: "high-performance"
//     });
    
//     renderer.setSize(window.innerWidth, window.innerHeight);
//     renderer.setClearColor(0x000000, 0);
//     renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
//     mountRef.current.appendChild(renderer.domElement);
    
//     sceneRef.current = scene;
//     rendererRef.current = renderer;

//     // Galaxy Core - Brilliant Center
//     const coreGeometry = new THREE.SphereGeometry(2, 64, 64);
//     const coreMaterial = new THREE.ShaderMaterial({
//       uniforms: {
//         time: { value: 0 },
//         intensity: { value: 3.0 }
//       },
//       vertexShader: `
//         varying vec2 vUv;
//         varying vec3 vPosition;
//         void main() {
//           vUv = uv;
//           vPosition = position;
//           gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
//         }
//       `,
//       fragmentShader: `
//         uniform float time;
//         uniform float intensity;
//         varying vec2 vUv;
//         varying vec3 vPosition;
        
//         void main() {
//           vec2 center = vUv - 0.5;
//           float dist = length(center);
          
//           // Pulsating core
//           float pulse = sin(time * 4.0) * 0.3 + 0.7;
//           float glow = (1.0 - dist) * pulse * intensity;
          
//           // Core colors - brilliant white to fuchsia
//           vec3 coreColor = mix(
//             vec3(1.0, 0.9, 1.0),
//             vec3(0.95, 0.3, 0.8),
//             dist
//           );
          
//           gl_FragColor = vec4(coreColor, glow);
//         }
//       `,
//       transparent: true,
//       blending: THREE.AdditiveBlending
//     });
    
//     const galaxyCore = new THREE.Mesh(coreGeometry, coreMaterial);
//     scene.add(galaxyCore);

//     // Spiral Arms - Multiple layers with different rotation speeds
//     const spiralArms = [];
//     const armCount = 6; // Multiple spiral arms
    
//     for (let armIndex = 0; armIndex < armCount; armIndex++) {
//       const armGroup = new THREE.Group();
      
//       // Create spiral arm geometry
//       const spiralGeometry = new THREE.BufferGeometry();
//       const spiralCount = 15000; // Massive number of particles per arm
//       const positions = new Float32Array(spiralCount * 3);
//       const colors = new Float32Array(spiralCount * 3);
//       const sizes = new Float32Array(spiralCount);
//       const rotations = new Float32Array(spiralCount);
      
//       for (let i = 0; i < spiralCount; i++) {
//         const i3 = i * 3;
        
//         // Spiral mathematics
//         const radius = 5 + (i / spiralCount) * 45;
//         const angle = (i / spiralCount) * Math.PI * 8 + (armIndex * Math.PI * 2 / armCount);
//         const spiralTightness = 0.3;
        
//         // Position with spiral distortion
//         const x = Math.cos(angle + radius * spiralTightness) * radius;
//         const z = Math.sin(angle + radius * spiralTightness) * radius;
//         const y = (Math.random() - 0.5) * (2 - radius * 0.03); // Flattened galaxy disk
        
//         positions[i3] = x + (Math.random() - 0.5) * 2;
//         positions[i3 + 1] = y;
//         positions[i3 + 2] = z + (Math.random() - 0.5) * 2;
        
//         // Distance-based coloring
//         const distFromCore = Math.sqrt(x*x + y*y + z*z);
//         const colorVariation = Math.random();
        
//         if (distFromCore < 10) {
//           // Inner region - bright fuchsia/white
//           colors[i3] = 0.95 + Math.random() * 0.05;
//           colors[i3 + 1] = 0.4 + Math.random() * 0.4;
//           colors[i3 + 2] = 0.9 + Math.random() * 0.1;
//         } else if (distFromCore < 25) {
//           // Middle region - purple/fuchsia
//           colors[i3] = 0.8 + Math.random() * 0.2;
//           colors[i3 + 1] = 0.2 + Math.random() * 0.3;
//           colors[i3 + 2] = 0.9 + Math.random() * 0.1;
//         } else {
//           // Outer region - deep purple/blue
//           colors[i3] = 0.6 + Math.random() * 0.2;
//           colors[i3 + 1] = 0.1 + Math.random() * 0.2;
//           colors[i3 + 2] = 0.8 + Math.random() * 0.2;
//         }
        
//         sizes[i] = Math.random() * 3 + 0.5;
//         rotations[i] = Math.random() * Math.PI * 2;
//       }
      
//       spiralGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
//       spiralGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
//       spiralGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
//       spiralGeometry.setAttribute('rotation', new THREE.BufferAttribute(rotations, 1));
      
//       const spiralMaterial = new THREE.ShaderMaterial({
//         uniforms: {
//           time: { value: 0 },
//           armOffset: { value: armIndex * 0.5 }
//         },
//         vertexShader: `
//           attribute float size;
//           attribute vec3 color;
//           attribute float rotation;
//           uniform float time;
//           uniform float armOffset;
//           varying vec3 vColor;
//           varying float vAlpha;
//           varying float vRotation;
          
//           void main() {
//             vColor = color;
//             vRotation = rotation + time + armOffset;
            
//             vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            
//             // Distance-based alpha and size
//             float distFromCore = length(position);
//             vAlpha = 1.0 / (1.0 + distFromCore * 0.02);
            
//             // Twinkling effect
//             float twinkle = sin(time * 2.0 + position.x * 0.01 + position.z * 0.01 + armOffset) * 0.5 + 0.5;
//             vAlpha *= (0.4 + twinkle * 0.6);
            
//             gl_PointSize = size * (300.0 / -mvPosition.z) * (0.5 + twinkle);
//             gl_Position = projectionMatrix * mvPosition;
//           }
//         `,
//         fragmentShader: `
//           varying vec3 vColor;
//           varying float vAlpha;
//           varying float vRotation;
          
//           void main() {
//             vec2 center = gl_PointCoord - vec2(0.5);
            
//             // Rotate the star shape
//             float cos_r = cos(vRotation);
//             float sin_r = sin(vRotation);
//             center = mat2(cos_r, -sin_r, sin_r, cos_r) * center;
            
//             // Create star shape
//             float angle = atan(center.y, center.x);
//             float radius = length(center);
            
//             // Star rays
//             float star = 1.0 - smoothstep(0.0, 0.3, radius);
//             float rays = sin(angle * 6.0) * 0.3 + 0.7;
//             star *= rays;
            
//             // Soft circular falloff
//             float circle = 1.0 - smoothstep(0.2, 0.5, radius);
            
//             float finalAlpha = max(star, circle * 0.6) * vAlpha;
            
//             gl_FragColor = vec4(vColor, finalAlpha);
//           }
//         `,
//         transparent: true,
//         blending: THREE.AdditiveBlending,
//         vertexColors: true
//       });
      
//       const spiralArm = new THREE.Points(spiralGeometry, spiralMaterial);
//       armGroup.add(spiralArm);
      
//       spiralArms.push({
//         group: armGroup,
//         material: spiralMaterial,
//         rotationSpeed: 0.0005 + armIndex * 0.0001
//       });
      
//       scene.add(armGroup);
//     }

//     // Cosmic Dust Clouds - Volumetric nebula effects
//     const dustClouds = [];
//     const cloudCount = 12;
    
//     for (let i = 0; i < cloudCount; i++) {
//       const cloudGeometry = new THREE.PlaneGeometry(25, 25, 32, 32);
      
//       const cloudMaterial = new THREE.ShaderMaterial({
//         uniforms: {
//           time: { value: 0 },
//           cloudOffset: { value: i * 0.3 },
//           opacity: { value: 0.15 - i * 0.008 }
//         },
//         vertexShader: `
//           uniform float time;
//           uniform float cloudOffset;
//           varying vec2 vUv;
//           varying vec3 vWorldPosition;
          
//           // Noise function
//           vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
//           vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
//           vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
//           vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
          
//           float snoise(vec3 v) {
//             const vec2 C = vec2(1.0/6.0, 1.0/3.0);
//             const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
//             vec3 i = floor(v + dot(v, C.yyy));
//             vec3 x0 = v - i + dot(i, C.xxx);
//             vec3 g = step(x0.yzx, x0.xyz);
//             vec3 l = 1.0 - g;
//             vec3 i1 = min(g.xyz, l.zxy);
//             vec3 i2 = max(g.xyz, l.zxy);
//             vec3 x1 = x0 - i1 + C.xxx;
//             vec3 x2 = x0 - i2 + C.yyy;
//             vec3 x3 = x0 - D.yyy;
//             i = mod289(i);
//             vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
//             float n_ = 0.142857142857;
//             vec3 ns = n_ * D.wyz - D.xzx;
//             vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
//             vec4 x_ = floor(j * ns.z);
//             vec4 y_ = floor(j - 7.0 * x_);
//             vec4 x = x_ *ns.x + ns.yyyy;
//             vec4 y = y_ *ns.x + ns.yyyy;
//             vec4 h = 1.0 - abs(x) - abs(y);
//             vec4 b0 = vec4(x.xy, y.xy);
//             vec4 b1 = vec4(x.zw, y.zw);
//             vec4 s0 = floor(b0) * 2.0 + 1.0;
//             vec4 s1 = floor(b1) * 2.0 + 1.0;
//             vec4 sh = -step(h, vec4(0.0));
//             vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
//             vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
//             vec3 p0 = vec3(a0.xy, h.x);
//             vec3 p1 = vec3(a0.zw, h.y);
//             vec3 p2 = vec3(a1.xy, h.z);
//             vec3 p3 = vec3(a1.zw, h.w);
//             vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
//             p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
//             vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
//             m = m * m;
//             return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
//           }
          
//           void main() {
//             vUv = uv;
//             vec3 pos = position;
            
//             // Add turbulent motion to dust
//             float noise1 = snoise(pos * 0.02 + time * 0.2 + cloudOffset);
//             float noise2 = snoise(pos * 0.05 + time * 0.15 + cloudOffset * 1.3);
            
//             pos += normal * (noise1 * 3.0 + noise2 * 1.5);
            
//             vWorldPosition = (modelMatrix * vec4(pos, 1.0)).xyz;
//             gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
//           }
//         `,
//         fragmentShader: `
//           uniform float time;
//           uniform float cloudOffset;
//           uniform float opacity;
//           varying vec2 vUv;
//           varying vec3 vWorldPosition;
          
//           void main() {
//             vec2 center = vUv - 0.5;
//             float dist = length(center);
            
//             // Complex cloud patterns
//             float cloud = 1.0 - smoothstep(0.1, 0.5, dist);
            
//             // Multiple noise layers for realistic clouds
//             float turbulence1 = sin(vUv.x * 8.0 + time * 0.5 + cloudOffset) * 0.5 + 0.5;
//             float turbulence2 = cos(vUv.y * 6.0 + time * 0.7 + cloudOffset) * 0.5 + 0.5;
//             float turbulence3 = sin((vUv.x + vUv.y) * 10.0 + time * 0.3) * 0.5 + 0.5;
            
//             cloud *= turbulence1 * turbulence2 * turbulence3;
            
//             // Distance-based color
//             float distFromCore = length(vWorldPosition) * 0.02;
            
//             vec3 dustColor1 = vec3(0.9, 0.4, 0.8); // Bright fuchsia
//             vec3 dustColor2 = vec3(0.6, 0.2, 0.7); // Deep purple
//             vec3 dustColor3 = vec3(0.8, 0.3, 0.9); // Pink-purple
            
//             vec3 finalColor = mix(dustColor1, dustColor2, distFromCore);
//             finalColor = mix(finalColor, dustColor3, sin(time + cloudOffset) * 0.5 + 0.5);
            
//             gl_FragColor = vec4(finalColor, cloud * opacity);
//           }
//         `,
//         transparent: true,
//         blending: THREE.AdditiveBlending,
//         side: THREE.DoubleSide
//       });
      
//       const dustCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
      
//       // Position clouds in galaxy disk
//       const angle = (i / cloudCount) * Math.PI * 2;
//       const radius = 15 + Math.random() * 25;
//       dustCloud.position.set(
//         Math.cos(angle) * radius,
//         (Math.random() - 0.5) * 3,
//         Math.sin(angle) * radius
//       );
      
//       dustCloud.rotation.z = angle + Math.PI / 2;
//       dustCloud.scale.setScalar(0.8 + Math.random() * 0.4);
      
//       dustClouds.push({ mesh: dustCloud, material: cloudMaterial });
//       scene.add(dustCloud);
//     }

//     // Background Starfield - Deep space
//     const bgStarGeometry = new THREE.BufferGeometry();
//     const bgStarCount = 5000;
//     const bgPositions = new Float32Array(bgStarCount * 3);
//     const bgColors = new Float32Array(bgStarCount * 3);
    
//     for (let i = 0; i < bgStarCount; i++) {
//       const i3 = i * 3;
      
//       // Distribute in sphere
//       const radius = 100 + Math.random() * 400;
//       const theta = Math.random() * Math.PI * 2;
//       const phi = Math.acos(2 * Math.random() - 1);
      
//       bgPositions[i3] = radius * Math.sin(phi) * Math.cos(theta);
//       bgPositions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
//       bgPositions[i3 + 2] = radius * Math.cos(phi);
      
//       // Distant star colors
//       const colorVar = Math.random();
//       if (colorVar < 0.6) {
//         bgColors[i3] = 0.8 + Math.random() * 0.2;
//         bgColors[i3 + 1] = 0.8 + Math.random() * 0.2;
//         bgColors[i3 + 2] = 1.0;
//       } else {
//         bgColors[i3] = 0.7 + Math.random() * 0.3;
//         bgColors[i3 + 1] = 0.3 + Math.random() * 0.2;
//         bgColors[i3 + 2] = 0.8 + Math.random() * 0.2;
//       }
//     }
    
//     bgStarGeometry.setAttribute('position', new THREE.BufferAttribute(bgPositions, 3));
//     bgStarGeometry.setAttribute('color', new THREE.BufferAttribute(bgColors, 3));
    
//     const bgStarMaterial = new THREE.PointsMaterial({
//       size: 0.8,
//       transparent: true,
//       opacity: 0.6,
//       vertexColors: true,
//       blending: THREE.AdditiveBlending
//     });
    
//     const backgroundStars = new THREE.Points(bgStarGeometry, bgStarMaterial);
//     scene.add(backgroundStars);

//     // Camera positioning
//     camera.position.set(0, 30, 60);
//     camera.lookAt(0, 0, 0);

//     let time = 0;
    
//     const animate = () => {
//       time += 0.008;
      
//       // Update core pulsation
//       coreMaterial.uniforms.time.value = time;
      
//       // Rotate spiral arms at different speeds
//       spiralArms.forEach(({ group, material, rotationSpeed }, index) => {
//         group.rotation.y += rotationSpeed * (1 + index * 0.1);
//         material.uniforms.time.value = time;
//       });
      
//       // Animate dust clouds
//       dustClouds.forEach(({ mesh, material }, index) => {
//         material.uniforms.time.value = time;
//         mesh.rotation.z += 0.0002 * (1 + index * 0.05);
//       });
      
//       // Slow rotation of entire galaxy
//       scene.rotation.y += 0.0001;
      
//       // Gentle camera movement
//       camera.position.x = Math.sin(time * 0.1) * 3;
//       camera.position.y = 30 + Math.cos(time * 0.15) * 5;
//       camera.lookAt(0, 0, 0);
      
//       // Background stars rotation
//       backgroundStars.rotation.y += 0.00005;
//       backgroundStars.rotation.x += 0.00002;
      
//       renderer.render(scene, camera);
//       animationRef.current = requestAnimationFrame(animate);
//     };
    
//     animate();

//     // Resize handler
//     const handleResize = () => {
//       camera.aspect = window.innerWidth / window.innerHeight;
//       camera.updateProjectionMatrix();
//       renderer.setSize(window.innerWidth, window.innerHeight);
//     };
    
//     window.addEventListener('resize', handleResize);
    
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       if (animationRef.current) {
//         cancelAnimationFrame(animationRef.current);
//       }
//       if (mountRef.current && renderer.domElement) {
//         mountRef.current.removeChild(renderer.domElement);
//       }
//       renderer.dispose();
//     };
//   }, []);

//   return (
//     <div 
//       ref={mountRef} 
//       className="fixed inset-0 pointer-events-none"
//       style={{ zIndex: 0 }}
//     />
//   );
// };

// // =======================
// // Hero Component
// // =======================
// const Hero = () => {
//   const words = [
//     "Web Interfaces",
//     "3D Visuals",
//     "Responsiveness",
//     "UI Animations",
//     "High-Performance",
//     "User Experience",
//   ];

//   const [loaded, setLoaded] = useState(false);

//   useEffect(() => {
//     setLoaded(true);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative flex flex-col-reverse items-center justify-between min-h-screen px-4 py-8 md:flex-row md:px-11 bg-gradient-to-b from-[#1a0a1a] via-[#2d1b3d] to-[#0f0a1f] overflow-hidden"
//       style={{
//         opacity: loaded ? 1 : 0,
//         transition: "opacity 1.2s ease-in-out",
//       }}
//     >
//       {/* Massive Galaxy System */}
//       <MassiveGalaxySystem />

//       {/* Left Text */}
//       <div className="relative z-20 flex flex-col justify-center flex-1 mt-4 space-y-3 text-center sm:mt-6 md:mt-0 md:text-left">
//         <motion.div
//           className="absolute border shadow-2xl -inset-8 bg-gradient-to-br from-black/40 via-purple-900/30 to-fuchsia-900/20 backdrop-blur-2xl rounded-3xl border-fuchsia-400/30"
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1.5, delay: 0.2 }}
//         />
        
//         <motion.p 
//           className="relative z-10 text-xs text-fuchsia-200 sm:text-sm md:text-base font-brshape drop-shadow-lg"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.4 }}
//         >
//           Crafting digital experiences that captivate and inspire
//         </motion.p>

//         <motion.h1 
//           className="relative z-10 text-2xl font-bold text-white sm:text-3xl md:text-5xl lg:text-6xl drop-shadow-2xl"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.2, delay: 0.6 }}
//         >
//           <FlipWords words={words} />
//         </motion.h1>

//         <motion.div
//           className="relative z-10"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 0.8 }}
//         >
//           <TextGenerateEffect
//             words="Transforming ideas into digital experiences. From smooth UI interactions and responsive designs to immersive 3D visuals and creative web animations, I build websites that are not just functional, but memorable. Websites focused on clean code, performance, and user-centered design to create digital experiences that engage, inspire, and leave a lasting impression."
//             className="font-light text-fuchsia-100 font-Pixelify drop-shadow-lg"
//             textClassName="text-xs sm:text-sm md:text-base"
//           />
//         </motion.div>

//         <motion.div 
//           className="relative z-10 flex flex-col w-full gap-3 py-6 sm:flex-row sm:justify-start"
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1, delay: 1 }}
//         >
//           <a
//             href="mailto:ahmedali57863@gmail.com?subject=Hello&body=I%20want%20to%20hire%20you"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <button className="w-full px-4 py-2 text-xs transition border rounded-full text-fuchsia-200 font-Pixelify2 sm:w-auto border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-black hover:shadow-lg hover:shadow-fuchsia-500/40 backdrop-blur-sm">
//               Hire Me
//             </button>
//           </a>
//           <CopyEmailButton />
//         </motion.div>
//       </div>

//       {/* Right Side - Galaxy interaction area */}
//       <div className="relative flex items-center justify-center flex-1 mb-8 md:mb-0">
//         <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[600px] lg:max-w-[700px] h-[400px] sm:h-[500px] md:h-[600px] flex justify-center items-center">
//           {/* Cosmic glow overlay */}
//           <motion.div
//             className="absolute inset-0 rounded-full bg-gradient-radial from-fuchsia-500/10 via-purple-600/5 to-transparent"
//             animate={{
//               scale: [1, 1.3, 1],
//               opacity: [0.1, 0.3, 0.1],
//             }}
//             transition={{
//               duration: 6,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;








































"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/stateful-button";

// =======================
// Copy Email Button
// =======================
const CopyEmailButton = () => {
  const email = "ahmedali57863@gmail.com";
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    return new Promise((resolve) => {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setTimeout(resolve, 1000);
    });
  };

  return (
    <Button
      onClick={handleCopyEmail}
      className="w-full px-4 py-2 text-xs text-white transition border rounded-full font-Pixelify2 sm:w-auto border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-black hover:shadow-lg hover:shadow-fuchsia-500/40"
    >
      {copied ? "Copied!" : "Copy Email"}
    </Button>
  );
};

// =======================
// Floating 3D Elements
// =======================
const FloatingElements = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const particleCount = isMobile ? 15 : 40;
  const shapeCount = isMobile ? 3 : 8;

  const shapes = Array.from({ length: shapeCount }).map((_, i) => ({
    id: i,
    size: isMobile ? 40 : 70,
    color: "bg-gradient-to-br from-fuchsia-400 to-purple-500",
    delay: i * 0.5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`absolute ${shape.color} rounded-3xl will-change-transform`}
          style={{
            width: shape.size,
            height: shape.size,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            opacity: 0.6,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.2, 0.8],
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 100 - 50, 0],
          }}
          transition={{
            duration: isMobile ? 12 : 8,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Particle Grid */}
      {Array.from({ length: particleCount }).map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full bg-fuchsia-400 will-change-transform"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            x: [0, Math.random() * 80 - 40],
            y: [0, Math.random() * 80 - 40],
          }}
          transition={{
            duration: isMobile ? 5 : 3,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// =======================
// Morphing Background Blobs
// =======================
const MorphingBlobs = () => {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className={`absolute rounded-full ${
          isMobile ? "w-64 h-64 blur-xl" : "w-96 h-96 blur-3xl"
        } bg-gradient-to-r from-fuchsia-300/30 to-purple-400/30`}
        style={{ right: "10%", top: "20%" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 40, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {!isMobile && (
        <motion.div
          className="absolute rounded-full w-80 h-80 bg-gradient-to-r from-pink-300/20 to-fuchsia-400/20 blur-2xl"
          style={{ right: "25%", bottom: "30%" }}
          animate={{
            scale: [1.2, 0.8, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      )}
    </div>
  );
};

// =======================
// Hero Component
// =======================
const Hero = () => {
  const words = [
    "Web Interfaces",
    "3D Visuals",
    "Responsiveness",
    "UI Animations",
    "High-Performance",
    "User Experience",
  ];

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex flex-col-reverse items-center justify-between min-h-screen px-4 py-8 md:flex-row md:px-11 bg-gradient-to-b from-[#dab6d5] via-[#e2addd] to-[#f3aef0] overflow-hidden"
      style={{
        opacity: loaded ? 1 : 0,
        transition: "opacity 0.8s ease-in-out",
      }}
    >
      {/* Background Elements */}
      <MorphingBlobs />
      <FloatingElements />

      {/* Left Text */}
      <div className="z-20 flex flex-col justify-center flex-1 mt-4 space-y-3 text-center sm:mt-6 md:mt-0 md:text-left">
        <motion.p
          className="text-xs text-gray-700 sm:text-sm md:text-base font-brshape"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Crafting digital experiences that captivate and inspire
        </motion.p>

        <motion.h1
          className="relative text-2xl font-bold text-black sm:text-3xl md:text-5xl lg:text-6xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <FlipWords words={words} />
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <TextGenerateEffect
            words="Transforming ideas into digital experiences. From smooth UI interactions and responsive designs to immersive 3D visuals and creative web animations, I build websites that are not just functional, but memorable."
            className="font-light text-fuchsia-900 font-Pixelify"
            textClassName="text-xs sm:text-sm md:text-base"
          />
        </motion.div>

        <motion.div
          className="flex flex-col w-full gap-3 py-6 sm:flex-row sm:justify-start"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <a
            href="mailto:ahmedali57863@gmail.com?subject=Hello&body=I%20want%20to%20hire%20you"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="w-full px-4 py-2 text-xs text-gray-700 transition border rounded-full font-Pixelify2 sm:w-auto border-fuchsia-400/50 hover:bg-fuchsia-500 hover:text-black hover:shadow-lg hover:shadow-fuchsia-500/40">
              Hire Me
            </button>
          </a>
          <CopyEmailButton />
        </motion.div>
      </div>

      {/* Right Side 3D Scene */}
      <div className="relative flex items-center justify-center flex-1 mb-8 md:mb-0">
        <div className="relative w-full max-w-[280px] sm:max-w-[400px] md:max-w-[600px] h-[360px] sm:h-[500px] md:h-[600px] flex justify-center items-center">
          <motion.div
            className="relative z-10 w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 will-change-transform"
            initial={{ scale: 0 }}
            animate={{ scale: 1, rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 transform rotate-45 bg-gradient-to-br from-fuchsia-400 via-purple-500 to-pink-600 rounded-3xl"></div>
            <div className="absolute inset-2 transform bg-gradient-to-tl from-fuchsia-300 via-purple-400 to-pink-500 rounded-2xl -rotate-12"></div>
            <div className="absolute inset-4 transform bg-gradient-to-r from-fuchsia-200 via-purple-300 to-pink-400 rounded-xl rotate-6"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
