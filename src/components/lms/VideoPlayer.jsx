import { useState, useRef, useEffect } from 'react';
import { 
  Play, Pause, Volume2, VolumeX, Maximize, Settings, 
  Lock, AlertTriangle 
} from 'lucide-react';
import { motion } from 'framer-motion';

const VideoPlayer = ({ 
  videoUrl, 
  title, 
  isLocked = false,
  watermarkText = 'Protected Content',
  onProgress,
  onComplete 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  // Disable right-click and keyboard shortcuts
  const handleContextMenu = (e) => {
    e.preventDefault();
    return false;
  };

  const handleKeyDown = (e) => {
    // Prevent common download shortcuts
    if (
      (e.ctrlKey && e.key === 's') || // Ctrl+S
      (e.ctrlKey && e.key === 'u') || // Ctrl+U
      (e.key === 'F12') || // F12 (DevTools)
      (e.ctrlKey && e.shiftKey && e.key === 'I') // Ctrl+Shift+I
    ) {
      e.preventDefault();
      return false;
    }
  };

  useEffect(() => {
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Auto-hide controls
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgress = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
      
      if (onProgress) {
        onProgress(currentProgress);
      }

      // Check if video is completed (95% watched)
      if (currentProgress >= 95 && onComplete) {
        onComplete();
      }
    }
  };

  const handleSeek = (e) => {
    const seekTime = (e.target.value / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(e.target.value);
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  if (isLocked) {
    return (
      <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden flex items-center justify-center">
        <div className="text-center space-y-4">
          <Lock className="w-16 h-16 text-gray-600 mx-auto" />
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              This lesson is locked
            </h3>
            <p className="text-gray-400">
              Enroll in the course to access this content
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full aspect-video bg-black rounded-lg overflow-hidden group protected-content"
      onMouseMove={resetControlsTimeout}
      onMouseLeave={() => setShowControls(false)}
    >
      {/* Video Element - Hidden URL */}
      <video
        ref={videoRef}
        className="w-full h-full"
        onTimeUpdate={handleProgress}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        controlsList="nodownload noplaybackrate"
        disablePictureInPicture
        playsInline
      >
        {/* Video source would be loaded securely from backend */}
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Watermark Overlay */}
      <div className="absolute top-4 right-4 bg-black/50 text-white text-xs px-3 py-1 rounded pointer-events-none">
        {watermarkText}
      </div>

      {/* Protection Warning */}
      <div className="absolute bottom-20 left-4 right-4 bg-black/70 text-white text-xs px-3 py-2 rounded flex items-center gap-2 pointer-events-none">
        <AlertTriangle className="w-4 h-4 text-yellow-400" />
        <span>This content is protected. Recording or distribution is prohibited.</span>
      </div>

      {/* Play/Pause Overlay */}
      <motion.button
        className="absolute inset-0 flex items-center justify-center"
        onClick={handlePlayPause}
        initial={{ opacity: 0 }}
        animate={{ opacity: showControls && !isPlaying ? 1 : 0 }}
      >
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
          <Play className="w-10 h-10 text-white ml-1" />
        </div>
      </motion.button>

      {/* Controls */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 space-y-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: showControls ? 1 : 0, y: showControls ? 0 : 20 }}
      >
        {/* Progress Bar */}
        <input
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={handleSeek}
          className="w-full h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary-600"
        />

        {/* Control Buttons */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button
              onClick={handlePlayPause}
              className="text-white hover:text-primary-400 transition-colors"
            >
              {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
            </button>

            {/* Volume */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleMuteToggle}
                className="text-white hover:text-primary-400 transition-colors"
              >
                {isMuted || volume === 0 ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Settings (placeholder) */}
            <button className="text-white hover:text-primary-400 transition-colors">
              <Settings className="w-6 h-6" />
            </button>

            {/* Fullscreen */}
            <button
              onClick={handleFullscreen}
              className="text-white hover:text-primary-400 transition-colors"
            >
              <Maximize className="w-6 h-6" />
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default VideoPlayer;
