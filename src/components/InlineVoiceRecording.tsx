import { useEffect, useRef } from 'react';
import { Mic } from 'lucide-react';
import { Button } from './ui/button';

interface InlineVoiceRecordingProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function InlineVoiceRecording({ onConfirm, onCancel }: InlineVoiceRecordingProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const timeRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match container
    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * window.devicePixelRatio;
      canvas.height = rect.height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    // Get primary color from CSS variable
    const getPrimaryColor = () => {
      const style = getComputedStyle(document.documentElement);
      return style.getPropertyValue('--primary').trim() || '#4a671e';
    };

    const primaryColor = getPrimaryColor();

    // Parse hex color to RGB
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : { r: 74, g: 103, b: 30 };
    };

    const rgb = hexToRgb(primaryColor);

    // Animation function
    const animate = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const centerY = height / 2;

      // Clear canvas
      ctx.clearRect(0, 0, width, height);

      timeRef.current += 0.01;

      // Number of waves
      const waveCount = 5;

      for (let waveIndex = 0; waveIndex < waveCount; waveIndex++) {
        ctx.beginPath();

        // Wave parameters
        const amplitude = 30 + waveIndex * 8; // Height of wave
        const frequency = 0.01 + waveIndex * 0.002; // Wave frequency
        const phase = timeRef.current + waveIndex * 0.5; // Phase offset for each wave
        const opacity = 0.3 - waveIndex * 0.04; // Fade waves

        // Set stroke style with opacity
        ctx.strokeStyle = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${opacity})`;
        ctx.lineWidth = 1.5;

        // Draw the wave
        for (let x = 0; x <= width; x++) {
          // Create flowing wave pattern using multiple sine waves
          const y1 = Math.sin(x * frequency + phase) * amplitude;
          const y2 = Math.sin(x * frequency * 1.5 - phase * 0.7) * (amplitude * 0.5);
          const y3 = Math.sin(x * frequency * 0.8 + phase * 1.2) * (amplitude * 0.3);
          
          const y = centerY + y1 + y2 + y3;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <div className="flex-1 flex flex-col items-center justify-center px-6 py-4">
      {/* Waveform Canvas */}
      <div className="w-full mb-8 relative" style={{ height: '200px' }}>
        <canvas
          ref={canvasRef}
          className="w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Microphone Icon */}
      <div className="mb-6 flex items-center justify-center">
        <div className="relative">
          {/* Pulsing background circles */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 rounded-full bg-primary opacity-10 animate-ping" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-20 h-20 rounded-full bg-primary opacity-20"
              style={{ animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite' }}
            />
          </div>
          
          {/* Main icon container */}
          <div className="relative w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <Mic className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>

      {/* Status Text */}
      <p className="title-large text-foreground mb-2">Lytter...</p>
      <p className="label-medium text-muted-foreground mb-8">Snakk inn notatet ditt</p>

      {/* Action Buttons */}
      <div className="flex gap-3 w-full max-w-md">
        <Button variant="secondary" onClick={onCancel} className="flex-1">
          Avbryt
        </Button>
        <Button onClick={onConfirm} className="flex-1">
          Ferdig
        </Button>
      </div>
    </div>
  );
}
