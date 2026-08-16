import { Canvas } from '@react-three/fiber'
import React, { Suspense, useEffect, useRef } from 'react'
import StudioLights from './three/StudioLights'
import { features, featureSequence } from "../constants/index.js";
import clsx from 'clsx';
import MacbookModel from './models/Macbook';
import { useMediaQuery } from 'react-responsive';
import { Html } from '@react-three/drei';
import useMacbookStore from '../store/index.js';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const ModelScroll = () => {
  const groupRef = useRef(null);
  const isMobile = useMediaQuery({query: '(max-width: 1024px)'});
  const { setTexture } = useMacbookStore();

  //preload all the vids during component mount
  useEffect(() => {
    featureSequence.forEach((feature) => {
      const v = document.createElement('video');
      Object.assign(v, {
        src: feature.videoPath,
        muted: true,
        playsInLine: true,
        preload: 'auto',
        crossOrigin: 'anonymous',
      });
      v.load();
    })
  },[]);

  useGSAP(() => {
    //model rotation animation
    const modelTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: '#f-canvas',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        pin: true,
      }
    })
          //sync feature content
    const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: '#f-canvas',
      start: 'top top',
      end: 'bottom top',
      scrub: 1,
    }
  })
  //model spin animation
  if(groupRef.current) {
    groupRef.current.rotation.y = -Math.PI /4;
    modelTimeline.to(groupRef.current.rotation, { y: Math.PI / 4, ease: 'power1.inout'})
  }

  //text and texture syncing
  timeline
    .call(() => setTexture('videos/feature-1.mp4'))
    .to('.box1', { opacity:1, y:0})

    .call(() => setTexture('videos/feature-2.mp4'))
    .to('.box2', { opacity:1, y:0})

    .call(() => setTexture('videos/feature-3.mp4'))
    .to('.box3', { opacity:1, y:0})

    .call(() => setTexture('videos/feature-4.mp4'))
    .to('.box4', { opacity:1, y:0})

    .call(() => setTexture('videos/feature-5.mp4'))
    .to('.box5', { opacity:1, y:0})

}, []);


  return (
    <group ref={groupRef}>
      <Suspense fallback={<Html><h1 className='text-white text-3xl uppercase'>Loading...</h1></Html>}>
        <MacbookModel scale={isMobile ? 0.07 : 0.12} position={[0, -1.5, 0]}></MacbookModel>
      </Suspense>
    </group>
  )
}

const Features = () => {
  return (
    <section id="features">
      <h2>See it all in a new light.</h2>

      <Canvas id="f-canvas" camera={{}}>
        <StudioLights />
        <ambientLight intensity={0.5}/>
        <ModelScroll />

      </Canvas>

      <div className='absolute inset-0'>

        {features.map((feature, index) => (
          <div className={clsx('box', `box${index + 1}`, feature.styles)}>
              <img src={feature.icon} alt={feature.highlight} />
              <p>
                <span className='text-white'>{feature.highlight}</span>
                {feature.text}
              </p>
          </div>
        ))}
      </div>

    </section>
  )
}


export default Features