import { useEffect, useRef, useState } from 'react';
import { X, Check } from 'lucide-react';
import svgPaths from '../imports/svg-avbrtuz18i';

interface VoiceRecordingViewProps {
  isRecording: boolean;
  transcribedText: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function VoiceRecordingView({
  isRecording,
  transcribedText,
  onConfirm,
  onCancel,
}: VoiceRecordingViewProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const audioContextRef = useRef<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const [waveAmplitude, setWaveAmplitude] = useState(0);

  // Initialize audio visualization
  useEffect(() => {
    if (!isRecording) return;

    const initAudio = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        const source = audioContext.createMediaStreamSource(stream);

        analyser.fftSize = 256;
        source.connect(analyser);

        audioContextRef.current = audioContext;
        analyserRef.current = analyser;
        dataArrayRef.current = new Uint8Array(analyser.frequencyBinCount);
      } catch (error) {
        console.error('Error accessing microphone for visualization:', error);
      }
    };

    initAudio();

    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [isRecording]);

  // Draw waveform animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      if (!analyserRef.current || !dataArrayRef.current) {
        // Draw idle animation when no audio input
        drawIdleWaveform(ctx, canvas);
      } else {
        // Draw reactive waveform based on audio input
        analyserRef.current.getByteFrequencyData(dataArrayRef.current);
        drawReactiveWaveform(ctx, canvas, dataArrayRef.current);
      }

      animationFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isRecording]);

  const drawIdleWaveform = (ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerY = height / 2;
    const time = Date.now() * 0.001;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizon line (very subtle)
    ctx.beginPath();
    ctx.strokeStyle = 'rgba(74, 103, 30, 0.1)';
    ctx.lineWidth = 1;
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Draw multiple wave lines that emanate from the horizon
    const numberOfWaves = 12;
    for (let i = 0; i < numberOfWaves; i++) {
      ctx.beginPath();
      
      // Vary opacity - some waves lighter, some darker
      const baseOpacity = i < 4 ? 0.15 : i < 8 ? 0.25 : 0.35;
      const opacity = baseOpacity + Math.sin(time + i * 0.3) * 0.1;
      ctx.strokeStyle = `rgba(74, 103, 30, ${opacity})`;
      ctx.lineWidth = i < 4 ? 1 : i < 8 ? 1.5 : 2;

      const frequency = 0.015 + i * 0.002;
      const amplitude = 15 + i * 8;
      const phase = time * (0.5 + i * 0.1) + i * 0.8;
      const verticalOffset = (i - numberOfWaves / 2) * 3;

      for (let x = 0; x < width; x++) {
        // Create organic wave that flows through the horizon
        const waveY = Math.sin(x * frequency + phase) * amplitude * Math.sin(time * 0.5 + i * 0.2);
        const y = centerY + waveY + verticalOffset;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }
  };

  const drawReactiveWaveform = (
    ctx: CanvasRenderingContext2D,
    canvas: HTMLCanvasElement,
    dataArray: Uint8Array
  ) => {
    const rect = canvas.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const centerY = height / 2;
    const time = Date.now() * 0.001;

    // Calculate average amplitude from frequency data
    const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
    const normalizedAmplitude = average / 255;
    setWaveAmplitude(normalizedAmplitude);

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw horizon line (very subtle)
    ctx.beginPath();
    ctx.strokeStyle = `rgba(74, 103, 30, ${0.1 + normalizedAmplitude * 0.1})`;
    ctx.lineWidth = 1;
    ctx.moveTo(0, centerY);
    ctx.lineTo(width, centerY);
    ctx.stroke();

    // Draw multiple reactive wave lines emanating from horizon
    const numberOfWaves = 16;
    for (let i = 0; i < numberOfWaves; i++) {
      ctx.beginPath();
      
      // Vary opacity based on wave index and audio input
      const layerGroup = i < 5 ? 0 : i < 10 ? 1 : 2;
      const baseOpacity = layerGroup === 0 ? 0.12 : layerGroup === 1 ? 0.22 : 0.32;
      const reactiveOpacity = baseOpacity + normalizedAmplitude * 0.2;
      ctx.strokeStyle = `rgba(74, 103, 30, ${reactiveOpacity})`;
      ctx.lineWidth = layerGroup === 0 ? 1 : layerGroup === 1 ? 1.5 : 2;

      const frequency = 0.01 + i * 0.0015;
      const baseAmplitude = 20 + i * 10;
      
      // Amplitude reacts to audio input - waves expand outward from horizon
      const reactiveAmplitude = baseAmplitude * (1 + normalizedAmplitude * 3);
      const phase = time * (0.3 + i * 0.08) + i * 0.6;
      
      // Vertical offset from horizon - waves spread above and below
      const verticalSpread = (i - numberOfWaves / 2) * 4;

      for (let x = 0; x < width; x += 2) {
        const dataIndex = Math.floor((x / width) * dataArray.length);
        const dataValue = dataArray[dataIndex] / 255;

        // Create organic wave motion
        const baseWave = Math.sin(x * frequency + phase) * reactiveAmplitude;
        const audioModulation = dataValue * reactiveAmplitude * 0.5;
        const waveY = (baseWave + audioModulation) * Math.sin(time * 0.4 + i * 0.15);
        
        const y = centerY + waveY + verticalSpread;
        
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }
  };

  // Set canvas size
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const updateCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Set the actual size in pixels
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      // Scale the context to ensure correct drawing operations
      const ctx = canvas.getContext('2d');
      if (ctx) {
        ctx.scale(dpr, dpr);
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-background z-[60] flex flex-col">
      {/* Waveform Visualization */}
      <div className="flex-1 relative flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ width: '100%', height: '100%' }}
        />
        
        {/* Recording indicator */}
        {isRecording && (
          <div className="absolute top-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-error/10 rounded-full border border-error">
            <div className="w-3 h-3 bg-error rounded-full animate-pulse" />
            <span className="label-medium text-error">Lytter...</span>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex items-center justify-center gap-8 py-4 px-6">
        {/* Cancel Button - Red with error color */}
        <button
          onClick={onCancel}
          className="w-24 h-24 rounded-full bg-[var(--error)] flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
          aria-label="Avbryt opptak"
        >
          <X className="w-10 h-10 text-[var(--error-foreground)]" strokeWidth={3} />
        </button>

        {/* Confirm Button - Green with primary color */}
        <button
          onClick={onConfirm}
          className="w-24 h-24 rounded-full bg-[var(--primary)] flex items-center justify-center hover:opacity-90 transition-opacity shadow-lg"
          aria-label="Bekreft opptak"
        >
          <Check className="w-10 h-10 text-[var(--primary-foreground)]" strokeWidth={3} />
        </button>
      </div>

      {/* Live Transcription Text - Only show when there's transcribed text */}
      {transcribedText && (
        <div className="px-10 pb-8">
          <div className="relative">
            <div className="min-h-[152px] w-full px-4 py-3 rounded-[var(--radius)] border border-[var(--border)] bg-background">
              <p className="body-large text-foreground min-h-[24px]">
                {transcribedText}
              </p>
            </div>
            <div className="mt-1 px-4">
              <p className="label-small text-muted-foreground">Kun synlig for deg</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}