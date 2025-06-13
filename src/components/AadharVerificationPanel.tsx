
import React, { useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Camera, CheckCircle, AlertTriangle } from 'lucide-react';

interface AadharVerificationPanelProps {
  onVerificationComplete: () => void;
}

const AadharVerificationPanel = ({ onVerificationComplete }: AadharVerificationPanelProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isStreamActive, setIsStreamActive] = useState(false);
  const [aadharCaptured, setAadharCaptured] = useState(false);
  const [systemChecks, setSystemChecks] = useState({
    camera: false,
    microphone: false,
    screen: false
  });

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 },
        audio: true 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsStreamActive(true);
        setSystemChecks(prev => ({ ...prev, camera: true, microphone: true }));
      }
    } catch (error) {
      console.error('Error accessing camera:', error);
    }
  };

  const captureAadharSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      const canvas = canvasRef.current;
      const context = canvas.getContext('2d');
      
      canvas.width = videoRef.current.videoWidth;
      canvas.height = videoRef.current.videoHeight;
      
      if (context) {
        context.drawImage(videoRef.current, 0, 0);
        
        // Convert to blob and simulate upload
        canvas.toBlob((blob) => {
          if (blob) {
            console.log('Aadhar snapshot captured and ready for upload');
            setAadharCaptured(true);
            // In real implementation, upload to backend
          }
        });
      }
    }
  };

  const runSystemCheck = () => {
    // Simulate system checks
    setTimeout(() => {
      setSystemChecks({
        camera: true,
        microphone: true,
        screen: true
      });
    }, 1000);
  };

  const canProceed = aadharCaptured && Object.values(systemChecks).every(check => check);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-ai-blue">
              Pre-Interview Verification
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Aadhar Verification */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Camera className="mr-2 h-5 w-5" />
                  Aadhar Card Verification
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Please hold your Aadhar card clearly in front of the camera for verification.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
                      <video
                        ref={videoRef}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />
                      {!isStreamActive && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Button onClick={startCamera} size="lg">
                            <Camera className="mr-2 h-5 w-5" />
                            Start Camera
                          </Button>
                        </div>
                      )}
                    </div>
                    <canvas ref={canvasRef} className="hidden" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Instructions:</h4>
                      <ul className="text-sm space-y-1">
                        <li>• Hold Aadhar card horizontally</li>
                        <li>• Ensure text is clearly readable</li>
                        <li>• Keep card steady for 3 seconds</li>
                        <li>• Avoid glare and shadows</li>
                      </ul>
                    </div>
                    
                    <Button 
                      onClick={captureAadharSnapshot}
                      disabled={!isStreamActive}
                      className="w-full"
                      size="lg"
                    >
                      {aadharCaptured ? (
                        <>
                          <CheckCircle className="mr-2 h-5 w-5" />
                          Aadhar Captured
                        </>
                      ) : (
                        <>
                          <Camera className="mr-2 h-5 w-5" />
                          Capture Aadhar Snapshot
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Check */}
            <Card>
              <CardHeader>
                <CardTitle>System Check</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${systemChecks.camera ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <span>Camera Access</span>
                    {systemChecks.camera && <CheckCircle className="h-4 w-4 text-green-500" />}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${systemChecks.microphone ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <span>Microphone Access</span>
                    {systemChecks.microphone && <CheckCircle className="h-4 w-4 text-green-500" />}
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className={`w-4 h-4 rounded-full ${systemChecks.screen ? 'bg-green-500' : 'bg-gray-300'}`} />
                    <span>Screen Recording</span>
                    {systemChecks.screen && <CheckCircle className="h-4 w-4 text-green-500" />}
                  </div>
                </div>
                
                <Button onClick={runSystemCheck} variant="outline" className="w-full">
                  Run System Check
                </Button>
              </CardContent>
            </Card>

            {/* Proceed Button */}
            <div className="text-center">
              <Button 
                onClick={onVerificationComplete}
                disabled={!canProceed}
                size="lg"
                className="px-8"
              >
                {canProceed ? 'Proceed to Interview' : 'Complete Verification First'}
              </Button>
              
              {!canProceed && (
                <p className="text-sm text-muted-foreground mt-2">
                  Please complete Aadhar verification and system checks to continue
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AadharVerificationPanel;
