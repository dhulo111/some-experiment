import React from 'react';
import SmokeyCursor from "./components/lightswind/smokey-cursor"
import ModelViewer from './components/lightswind/3d-model-viewer';
import model from '../public/models/car.glb';

export default function LoginPage() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen bg-black text-white'>
        <ModelViewer
          url={model}
          autoRotate={true}
          autoRotateSpeed={1.0}
          environmentPreset="studio"
        />
        <h1 className='text-2xl font-bold'>Move your mouse</h1>
        <SmokeyCursor
          curl={10}
          splatForce={12000}
          densityDissipation={1.5}
          colorUpdateSpeed={20}
          backgroundColor={{ r: 0.8, g: 0.1, b: 0 }}
        />

      </div>
    </>
  );
}